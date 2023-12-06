// Navbar Menu
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

const data = {
  url: input.value,
};

// Create a new Variable and assign a class
const newUrl = document.createElement('div');
newUrl.classList.add('item');
newUrl.innerHTML = `
 <p>${data.display.short_link}</p>
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

postData('https://cleanuri.com/api/v1/shorten', data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Fetching the Data
async function postData(url = '', data = {}) {
  // Try Block will execute when we have a
  // successful shortening of the LINK

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;

  postData(url);
});
