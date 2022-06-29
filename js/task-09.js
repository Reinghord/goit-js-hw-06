function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const { body, span, button } = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector("[type=button]"),
};

button.addEventListener("click", () => {
  const colorValue = getRandomHexColor();
  body.style.backgroundColor = colorValue;
  span.textContent = colorValue;
});
