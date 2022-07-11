const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Create new array to store all li elements before appending to DOM
const li = [];

//Push to array
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  li.push(item);
});

//Append array into DOM
document.querySelector("ul").append(...li);
