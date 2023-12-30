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
function formError(ele) {
  const formError = ele.parentElement;
  const small = formError.querySelector('small');
  small.innerHTML = 'Please add a link';

  formError.classList.add('error');
}
// Validate the form
function validate(data) {
  const inputValue = input.value.trim();
  const parent = input.parentElement;
  if (inputValue === '') {
    parent.querySelector('small').innerText = 'Please add a Link!';
  }
  //   formError(input, 'Please add a link');
  displayData(data.result_url);
  // }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;
  console.log(url);

  postData(url);
  displayData(url);
  validate();
  formError();
});
