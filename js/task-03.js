const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.justifyContent = "space-between";
gallery.style.flexDirection = "column";

// images.forEach((image) => {
//   const item = document.createElement("li");
//   const picture = document.createElement("img");
//   picture.setAttribute("src", Object.values(image)[0]);
//   picture.setAttribute(Object.keys(image)[1], Object.values(image)[1]);
//   picture.setAttribute("width", "400");
//   gallery.append(item);
//   item.append(picture);
// });

images.forEach((image) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<li>
      <img src="${image.url}" alt="${image.alt}" width="400"></img>
    </li>`
  );
});
