const { fontSize, text } = {
  fontSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

fontSize.addEventListener("input", () => {
  text.style.fontSize = fontSize.value + "px";
});
