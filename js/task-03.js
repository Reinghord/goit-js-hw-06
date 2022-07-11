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

//Some styling for gallery
const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.justifyContent = "space-between";
// gallery.style.flexDirection = "column";
gallery.style.listStyle = "none";

//Create array to store created Elements before appending to DOM
const li = [];

//Creating markup and pushing to array
images.forEach((image) => {
  const item = document.createElement("li");
  const picture = document.createElement("img");
  picture.setAttribute("src", image.url);
  picture.setAttribute("alt", image.alt);
  picture.setAttribute("width", "400");
  item.innerHTML = picture.outerHTML;
  li.push(item.outerHTML);
});

//Appending array to DOM
gallery.insertAdjacentHTML("beforeend", li.join(""));
