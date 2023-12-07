// Navbar Menu Popup Functionality

const menuPop = document.querySelector('.humburger');
const navbar = document.querySelector('.navbar');

menuPop.addEventListener('click', () => {
  menuPop.classList.toggle('active');
  navbar.classList.toggle('active');
});

// Shortening URL
const form = document.querySelector('#form-js');
const input = document.querySelector('.input');
const display = document.querySelector('.display');

// Posting Data to the API
async function postData(url) {
  try {
    const res = await fetch(`https://cleanuri.com/api/v1/shorten?url=${url}`, {
      mode: 'no-cors',
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    // Create a new Variable and assign a class
    const newUrl = document.createElement('div');
    newUrl.classList.add('item');
    newUrl.innerHTML = `
   <p>${data.display.result_url}</p>
   <button class='newUrl-btn'>Copy</button>
   `;

    display.prepend(newUrl);
    const copyBtn = document.querySelector('.newUrl-btn');
    copyBtn.addEventListener('click', () => {
    // Adding functionality to the COPY, so we use this below
    // PreviousElementSibling gives us the paragragh
      navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
    });
    // Reseting the Input field
    input.value = '';
  } catch (err) {
    console.log(err);
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;

  postData(url);
});