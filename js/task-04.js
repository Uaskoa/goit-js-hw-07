const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");
let counterValue = Number(valueRef.textContent);

incrementBtnRef.addEventListener("click", handleIncreament);
decrementBtnRef.addEventListener("click", handleDecrement);

function handleIncreament() {
  valueRef.textContent = counterValue += 1;
}
function handleDecrement() {
  valueRef.textContent = counterValue -= 1;
}
