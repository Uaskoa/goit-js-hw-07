const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// OPTION 1

const galleryListRef = document.querySelector("#gallery");

galleryListRef.classList.add("list");

const createImg = (image) => {
  const liHtml = `<li><img src = ${image.url} alt= ${image.alt}></li>`;
  return liHtml;
};

const liHtmlArray = images.map((image) => createImg(image));

galleryListRef.insertAdjacentHTML("afterbegin", liHtmlArray.join(""));

// OPTION 2

// const galleryListRef = document.querySelector("#gallery");

// galleryListRef.classList.add("list");

// const createImg = (image) => {
//   const liRef = document.createElement("li");
//   const imgRef = document.createElement("img");

//   liRef.classList.add("list-item");
//   imgRef.classList.add("img-item");

//   imgRef.setAttribute("src", image.url);
//   imgRef.setAttribute("alt", image.alt);

//   liRef.appendChild(imgRef);
//   return liRef;
// };

// const imageCards = images.map((image) => createImg(image));

// galleryListRef.append(...imageCards);
