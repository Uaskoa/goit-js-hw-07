const inputRef = document.querySelector("#controls input");
const renderBtnRef = document.querySelector('button[data-action = "render"]');
const destroyBtnRef = document.querySelector('button[data-action = "destroy"]');
const boxesRef = document.querySelector("#boxes");

console.dir(inputRef);

renderBtnRef.addEventListener(`click`, (event) => {
  createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener(`click`, (event) => {
  destroyBoxes();
});

// function createBoxes(amount) {
//   for (let i = 0, s = 30; i < amount; i += 1, s += 10) {
//     const boxRef = document.createElement("div");
//     boxRef.style.width = `${s}px`;
//     boxRef.style.height = `${s}px`;
//     boxRef.style.backgroundColor = getRandomRgb();
//     boxesRef.append(boxRef);
//   }
// }

function createBoxes(amount) {
  const boxesToAdd = [];
  for (let i = 0, s = 30; i < amount; i += 1, s += 10) {
    const boxRef = document.createElement("div");
    boxRef.style.width = `${s}px`;
    boxRef.style.height = `${s}px`;
    boxRef.style.backgroundColor = getRandomRgb();
    boxesToAdd.push(boxRef);
  }

  boxesRef.append(...boxesToAdd);
}

function getRandomRgb() {
  const r = () => (Math.random() * 256) >> 0;
  const color = `rgb(${r()}, ${r()}, ${r()})`;
  return color;
}

function destroyBoxes() {
  const boxToDestroyRef = document.querySelectorAll("#boxes div");
  inputRef.value = "";
  for (let i = 0; i < boxToDestroyRef.length; i += 1) {
    boxesRef.removeChild(boxToDestroyRef[i]);
  }
}

// function destroyBoxes() {
//   boxesRef.innerHTML = "";
// }
