const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");

const createIngredient = (ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;

  return liRef;
};

const ingredientCards = ingredients.map((ingredient) =>
  createIngredient(ingredient)
);

ingredientsListRef.append(...ingredientCards);

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в список
// ul.ingredients.Для создания DOM - узлов используй document.createElement().
