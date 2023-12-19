// Navbar Menu Popup Functionality
const menuPop = document.querySelector('.humburger');
const navbar = document.querySelector('.navbar');

menuPop.addEventListener('click', () => {
  menuPop.classList.toggle('active');
  navbar.classList.toggle('active');
});

const form = document.querySelector('#form-js');
const input = document.querySelector('.input');
const display = document.querySelector('.display');

// Posting Data to the API
async function postData(url) {
  console.log(url);
  try {
    const res = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `url=${url}`,
    });

    const data = await res.json();
    console.log(data.result_url);
    // Create a new Variable and assign a class
  } catch (err) {
    // console.log(err);
  }
}

function displayData(data, shortenedUrl) {
  // console.log(data, 'from displayData', data.url);
  const div = document.createElement('div');
  div.classList.add('display-data');
  // SHowing the input url and the shortened url
  div.innerHTML = `
    <p class="wording">${data}</p>
    <hr>
    <p class="shortened-url">${shortenedUrl}</p>
    <button class="btn-Url">Copy</button>
  `;
  display.append(div);
  // Copy to Clipboard
  const copy = document.querySelector('.btn-Url');
  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(copy.previousElementSibling.textContent);
    copy.textContent = 'Copied';
    copy.style.backgroundColor = '#2ecc71';
    copy.style.color = '#fff';
    setTimeout(() => {
      copy.textContent = 'Copy';
      copy.style.backgroundColor = '#fff';
      copy.style.color = '#000';
    }, 2000);
    console.log(copy.previousElementSibling.textContent);
  });
  input.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;
  // console.log(url);

  postData(url);
  displayData(url);
});