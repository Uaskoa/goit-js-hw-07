const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const valueRef = document.querySelector("#value");
let counterValue = Number(valueRef.textContent);
const increament = () => {
  valueRef.textContent = counterValue += 1;
};
const decrement = () => {
  valueRef.textContent = counterValue -= 1;
};

incrementBtnRef.addEventListener("click", increament);
decrementBtnRef.addEventListener("click", decrement);


// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



// const decrementBtnRef = document.querySelector(
//   'button[data-action="decrement"]'
// );
// const incrementBtnRef = document.querySelector(
//   'button[data-action="increment"]'
// );
// const valueRef = document.querySelector("#value");

// let counterValue = 0;

// const increament = () => {
//   valueRef.textContent = counterValue += 1;
// };
// const decrement = () => {
//   valueRef.textContent = counterValue -= 1;
// };

// incrementBtnRef.addEventListener("click", increament);
// decrementBtnRef.addEventListener("click", decrement);
