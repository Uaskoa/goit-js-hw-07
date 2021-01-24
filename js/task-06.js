const inputRef = document.querySelector("#validation-input");
const inputLengthRef = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur() {
  if (inputRef.value.length === inputLengthRef) {
    return (
      inputRef.classList.add("valid"), inputRef.classList.remove("invalid")
    );
  }
  return inputRef.classList.add("invalid"), inputRef.classList.remove("valid");
}




//   if (e.target.value.length === inputLengthRef) {
//     return (
//       inputRef.classList.add("valid"), inputRef.classList.remove("invalid")
//     );
//   }
//   return inputRef.classList.add("invalid"), inputRef.classList.remove("valid");
// });

