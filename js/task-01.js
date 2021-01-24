const itemRef = document.querySelectorAll(".item");

console.log(`В списке ${itemRef.length} категории`);

itemRef.forEach((item) =>
  console.log(
    "Категория: ",
    item.firstElementChild.textContent,
    "Количество элементов: ",
    item.lastElementChild.children.length
  )
);

