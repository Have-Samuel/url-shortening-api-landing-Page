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

// Create the DOM function to display the data
function displayData(url) {
  const div = document.createElement('div');
  div.classList.add('display');
  div.innerHTML = `
  <div class="display">
  <div class="display__title">
  </div>
  <div class="display__url">
    <a href="${url}" target="_blank">${url}</a>
  </div>
  <div class="display__btn">
    <button class="btn" id="copy">Copy</button>
  </div>
</div>
  `;
  display.appendChild(div);
}

// Posting Data to the API
async function postData(url) {
  console.log(url);
  try {
    const res = await fetch('https://cleanuri.com/api/v1/shorten', {
      // mode: 'no-cors',
      // credentials: 'include',
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
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;
  console.log(url);

  postData(url);
  displayData(url);
});