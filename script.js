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
  } catch (err) {
  // console.log(err);
  }
}

// Displaying the Data to the DOM
function displayData(data) {
  const div = document.createElement('div');
  div.classList.add('display-data');
  // Show the input url and the shortened url to the DOM
  div.innerHTML = `
<p class="wording">${data}</p>
<hr>
<p class="shortened-url">${data.result_url}</p>
<button class="btn-Url">Copy</button>
`;

  display.append(div);
  // Copy to Clipboard
  const copy = document.querySelector('.btn-Url');
  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(copy.previousElementSibling.textContent);
  });
  input.value = '';
}
// If the form has no input, display an error message
function formError() {
  const inputEle = document.querySelector('.input');
  const span = document.createElement('span');
  if (inputEle.value === '') {
    span.classList.add('error');
    span.textContent = 'Please enter a valid URL';
    form.inputEle.append(span);
  } else {
    span.remove();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;
  console.log(url);

  postData(url);
  displayData(url);

  formError();
});
