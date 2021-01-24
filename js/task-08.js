

const inputRef = document.querySelector('#controls input')
console.log(inputRef);
const renderBtnRef = document.querySelector('button[data-action = "render"]');
const destroyBtnRef = document.querySelector('button[data-action = "destroy"]')
console.log(renderBtnRef);
console.log(destroyBtnRef);


const boxesRef = document.querySelector("#boxes");
console.log(boxesRef);

inputRef.addEventListener('input', () => { 
    console.log(inputRef.value);

})

function createBoxes(amount) { 
    const boxRef = document.createElement('div')
    return boxRef;
}


console.log(createBoxes());


// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция
// элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount -
// число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире
// и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.



// const ingredientsListRef = document.querySelector("#ingredients");

// const createIngredient = (ingredient) => {
//   const liRef = document.createElement("li");
//   liRef.textContent = ingredient;

//   return liRef;
// };

// const ingredientCards = ingredients.map((ingredient) =>
//   createIngredient(ingredient)
// );

// ingredientsListRef.append(...ingredientCards);
