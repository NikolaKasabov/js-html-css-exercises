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

}