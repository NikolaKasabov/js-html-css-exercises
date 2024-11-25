const colorPlaceholder = document.getElementById('colorPlaceholder');
const form = document.querySelector('form');
const colorsContainer = document.getElementById('colorsContainer');

let correctColor = null;

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const isChecked = ev.target.elements.areYouHuman?.checked;
  console.log(isChecked);
});

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