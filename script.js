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
// const display = document.querySelector('.display');

// Posting Data to the API
// const postData = async (url) => {
//   const res = await fetch(`https://cleanuri.com/api/v1/shorten?url=${url}`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ url }),
//   });
//   const data = await res.json();
//   console.log(data);
// https://cleanuri.com/api/v1/shorten
// async function postData(url) {
//   const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
//     method: 'POST',
//     // headers: {
//     //   'Content-type': 'application/json',
//     // },
//     // body: JSON.stringify({ url }),
//   });

//   const data = await res.json();
//   // Create a new Variable and assign a class
//   const newUrl = document.createElement('div');
//   newUrl.classList.add('item');
//   newUrl.innerHTML = `
//    <p>${data.display.result_url}</p>
//    <button class='newUrl-btn'>Copy</button>
//    `;

//   display.prepend(newUrl);
//   const copyBtn = document.querySelector('.newUrl-btn');
//   copyBtn.addEventListener('click', () => {
//     // Adding functionality to the COPY, so we use this below
//     // PreviousElementSibling gives us the paragragh
//     navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
//   });
//   // Reseting the Input field
//   input.value = '';
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;

  const data = {
    url,
  };

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      // mode: 'cors',
      // cache: 'no-cache',
      // credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      // redirect: 'follow',
      // referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  postData('https://api.shrtco.de/v2/shorten', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
});

// postData(url);
// );