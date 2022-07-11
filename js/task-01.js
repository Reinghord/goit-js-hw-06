const query = document.querySelectorAll("li.item");

console.log("Number of categories:", query[0].parentElement.childElementCount);
query.forEach((elem) => {
  console.log("Category:", elem.children[0].textContent);
  console.log("Elements", elem.children[1].childElementCount);
});

// console.log("Category:", document.querySelector("li.item > h2").textContent);
// console.log(
//   "Elements:",
//   document.querySelector("li.item > ul").childElementCount
// );

// console.log(
//   "Category:",
//   document.querySelectorAll("li.item > h2")[1].textContent
// );
// console.log(
//   "Elements:",
//   document.querySelectorAll("li.item > ul")[1].childElementCount
// );

// console.log(
//   "Category:",
//   document.querySelectorAll("li.item > h2")[2].textContent
// );
// console.log(
//   "Elements:",
//   document.querySelectorAll("li.item > ul")[2].childElementCount
// );
