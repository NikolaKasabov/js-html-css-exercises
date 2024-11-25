const h1 = document.querySelector('h1');
const colorPlaceholder = document.getElementById('colorPlaceholder');
const form = document.querySelector('form');
const formInput = document.querySelector('form input');
const formButton = document.querySelector('form button');
const colorsContainer = document.getElementById('colorsContainer');
const p = document.querySelector('p');

let correctColor = null;

form.addEventListener('submit', ev => {
  ev.preventDefault();
  onSuccess();
});

function disableForm() {
  formButton.disabled = true;
}

function enableForm() {
  formInput.checked = true;
  formButton.disabled = false;
}

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function generateColorButtons() {
  const randomIndex = Math.floor(Math.random() * 9);

  for (let i = 0; i < 9; i++) {
    const currentColor = randomHexColor();

    // choose random correct color
    if (randomIndex === i) {
      correctColor = currentColor;
      colorPlaceholder.innerText = currentColor;
    }

    const button = document.createElement('button');
    button.setAttribute('data-color', currentColor);
    button.style.backgroundColor = currentColor;
    button.innerText = currentColor;
    colorsContainer.append(button);
  }
}

generateColorButtons();
disableForm();

// listen for clicks on the color buttons
colorsContainer.addEventListener('click', ev => {
  // return if it is clicked the container element
  if (ev.target.nodeName !== 'BUTTON') {
    return;
  }

  const clickedColor = ev.target.dataset.color;
  if (clickedColor === correctColor) {
    enableForm();
  } else {
    disableForm();
    alert('Wrong color.');
  }
});

function onSuccess() {
  h1.classList.add('hidden');
  form.classList.add('hidden');
  colorsContainer.classList.add('hidden');
  p.classList.remove('hidden');
}
