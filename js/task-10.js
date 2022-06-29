function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const { boxes, number, create, destroy } = {
  boxes: document.querySelector("#boxes"),
  number: document.querySelector('[type="number"]'),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
};

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = (20 + i * 10).toString() + "px";
    div.style.width = (20 + i * 10).toString() + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

create.addEventListener("click", () => createBoxes(Number(number.value)));

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
