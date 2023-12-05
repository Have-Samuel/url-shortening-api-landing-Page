const { async } = require("q");

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;

  shortenUrl(url);
});

async function shortenUrl(url) {
  // Try Block will execute when we have a
  // successful shortening of the LINK
  try {
    const res = await fetch(`https://cleanuri.com/api/v1/shorten?url=${url}`)
    const data = res.json();

    // Create a new Variable and assign a class
    const newUrl = document.createElement('div')
    newUrl.classList.add('item')
  }
  //  CATCH block will handle the errors
  catch (error) {

  }
}