const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const outputRef = document.querySelector("#name-output");
console.dir(outputRef);
inputRef.addEventListener("input", () => {
  if (inputRef.value) {
    console.log(inputRef.value);
    return outputRef.textContent = inputRef.value;
    }
    return outputRef.textContent = "незнакомец";
});

