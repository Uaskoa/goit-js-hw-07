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


