console.log(
  "Number of categories:",
  document.querySelector("#categories").childElementCount
);

document.querySelectorAll("li.item").forEach((elem) => {
  console.log("Elements", elem.children[1].childElementCount);
  console.log("Category:", elem.children[0].textContent);
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
