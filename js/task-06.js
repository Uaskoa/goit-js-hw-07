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

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// const inputRef = document.querySelector("#validation-input");

// const inputLengthRef = Number(inputRef.getAttribute("data-length"));

// inputRef.addEventListener("blur", (e) => {
//   console.log(e.target.value);
//   console.log(inputRef.value);
//   console.log(e.target.value.length);
//   console.log(typeof inputRef.value.length);
//   console.log(typeof inputLengthRef);

//   //   if (inputRef.value.length === inputLengthRef) {
//   //       return inputRef.classList.add("valid"),
//   //      inputRef.classList.remove("invalid");
//   //   }
//   //     return inputRef.classList.add("invalid"),
//   //         inputRef.classList.remove("valid");

//   if (e.target.value.length === inputLengthRef) {
//     return (
//       inputRef.classList.add("valid"), inputRef.classList.remove("invalid")
//     );
//   }
//   return inputRef.classList.add("invalid"), inputRef.classList.remove("valid");
// });

