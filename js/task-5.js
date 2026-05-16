const elem = document.querySelector('body');
const colorChangeBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

colorChangeBtn.addEventListener('click', () => changeElemBgColor(elem));

function changeElemBgColor(elem) {
  const color = getRandomHexColor();
  elem.style.backgroundColor = color;
  colorName.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
