// Navbar Menu
const menuPop = document.querySelector('.humburger');
const navbar = document.querySelector('.navbar');

menuPop.addEventListener('click', () => {
  menuPop.classList.toggle('active');
  navbar.classList.toggle('active');
});

// Shortening URL
const form = document.querySelector('form');
const btn = document.querySelector('#shorten');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.input');
  const url = input.value;

  if (!url) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
    input.value = '';
    shortenUrl(url);
  }
});