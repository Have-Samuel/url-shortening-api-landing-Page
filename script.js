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
    // console.log(data);
    // console.log(url);
    displayData(data, url);
  } catch (err) {
  console.log(err);
  }
}

// Displaying the Data to the DOM
function displayData(data, url) {
  const div = document.createElement('div');
  div.classList.add('display-data');
  // console.log(url);
  // console.log(data);
  div.innerHTML = `
  <div class="long-url">
<p class="wording">${url}</p>
  </div>
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
  // When copy buttons is clicked, change the text to copied
  // copy.forEach((copy) => copy.addEventListener('click', () => {
  copy.addEventListener('click', () => {
    copy.textContent = 'Copied';
    copy.style.backgroundColor = '#3a3054';
    copy.style.color = '#fff';
  });
// }))
}

// If the form has no input, display an error message
function formError(ele) {
  const formError = ele.parentElement;
  const small = formError.querySelector('small');
  small.innerHTML = 'Please add a link';

  formError.classList.add('error');
}
// Validate the form
function validate() {
  // displayData(data.result_url);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;
  console.log(url);
  postData(url);
  validate();
  formError();
});
