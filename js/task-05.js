const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handleInput);

function handleInput() {
  outputRef.textContent = inputRef.value || "незнакомец";
}




// function handleInput() {
//   if (inputRef.value) {
//     return (outputRef.textContent = inputRef.value);
//   }
//   return (outputRef.textContent = "незнакомец");
// }

// inputRef.addEventListener("input", () => {
//   if (inputRef.value) {
//     console.log(inputRef.value);
//     return (outputRef.textContent = inputRef.value);
//   }
//   return (outputRef.textContent = "незнакомец");
// });
