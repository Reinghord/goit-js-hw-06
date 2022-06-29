function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const { boxes, number, create, destroy } = {
  boxes: document.querySelector("#boxes"),
  number: document.querySelector('[type="number"]'),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
};

// function createBoxes(amount) {
//   // console.log("test");
//   const div = document.createElement("div");
//   div.style.height = "30px";
//   div.style.width = "30px";
//   div.style.backgroundColor = getRandomHexColor();
//   div.className = "box";
//   // boxes.append(div);
//   boxes.insertAdjacentHTML("beforeend", "div");
//   for (let i = 1; i <= amount; i += 1) {}
// }

create.addEventListener("click", function createBoxes(amount) {
  amount = Number(number.value);
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = "30px";
    div.style.width = "30px";
    div.style.backgroundColor = getRandomHexColor();
    div.className = "box";
    boxes.append(div);
  }
});

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
// console.log(boxes.append(div));
