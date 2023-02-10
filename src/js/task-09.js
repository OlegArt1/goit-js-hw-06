function getRandomHexColor() {
  return ` #${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector('span.color');
const body = document.body;
buttonColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor() + ';';
});