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

// Displaying the Data to the DOM
function displayData(data, url) {
  const div = document.createElement('div');
  div.classList.add('display-data');
  div.innerHTML = `
  <div class="long-url">
  <p class="wording">${url}</p>
  </div>
<hr>
<p class="shortened-url">${data.result_url}</p>
<button class="btn-Url">Copy</button>
`;

  display.append(div);
  // Copy to Clipboard & Capture all copy buttons and Loop through the copy buttons
  const copy = document.querySelectorAll('.btn-Url');
  console.log(copy);
    copy.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Copied!';
      btn.style.backgroundColor = '#3a3054';
      navigator.clipboard.writeText(btn.previousElementSibling.textContent);
    });
  });
  input.value = '';
}

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
    displayData(data, url);
  } catch (err) {
  console.log(err);
  }
}

// Show an error message if the input field is empty
function showError(ele, msg) {
  const formControl = ele.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = msg;
  formControl.classList.add('error');
}

// Validate the input field
function isUrl(url) {
  if (url.match(/^(ftp|http|https):\/\/[^ "]+$/)) {
    return true;
  }
  return false;
}

// Remove the error message when the user starts typing
input.addEventListener('keyup', () => {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value.trim();
  console.log(url);
  if (!isUrl(url)) {
    showError(input, 'Please provide a valid link');
    input.style.border = '1px solid red';
  } else {
    postData(url);
  }
});
// remove the error border when the user starts typing
input.addEventListener('keyup', () => {
  input.style.border = 'none';
});

