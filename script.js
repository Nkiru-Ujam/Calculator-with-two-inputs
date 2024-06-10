"use strict";

const input1 = document.querySelector(".first_input");
const input2 = document.querySelector(".second_input");
const equalBtn = document.querySelector(".equal_btn");
const answerBox = document.querySelector(".result");
const equalButton = document.querySelector(".equalButton");

// const numInput1 = Number(input1.value);
// const numInput2 = Number(input2.value);

// equalBtn.addEventListener("click", () => {
//   //   console.log(typeof numInput1);
//   const inputValue1 = input1.value;
//   const inputValue2 = input2.value;
//   console.log(inputValue1, inputValue2);
//   if (answerBox.value === "NaN") {
//     alert("dsafghjkl");
//   }
//   answerBox.value = Number(inputValue1) + Number(inputValue2);
// });

// function add() {
//   const inputValue1 = +input1.value;
//   const inputValue2 = +input2.value;
//   const addedValue = Number(inputValue1) + Number(inputValue2);
//   console.log(addedValue);
//   answerBox.value = addedValue;
//   console.log(answerBox);
//   console.log(inputValue1, inputValue2);

//   //   if (typeof inputValue1 === "string") return;

//   //   if (typeof inputValue1 === "string" || typeof inputValue2 === "string") {
//   //     answerBox.value = "";
//   //     alert("Please refrain from using alphabets in this calculator");
//   //     return null;
//   //   } else {
//   //   }
//   if (isNaN(inputValue1) || isNaN(inputValue2)) {
//     alert("Please refrain from using alphabets in this calculator");
//     input1.value = "";
//     input2.value = "";
//   } else {
//     console.log("Continue with your stupid calculation");
//   }
// }

// equalBtn.addEventListener("click", add);
// input1.addEventListener("input", add);
// input2.addEventListener("input", add);

// console.log(isNaN("so"));
// const y = isNaN("soi");
// console.log(y);

function subtract() {
  const param1 = Number(input1.value);
  const param2 = Number(input2.value);
  console.log(param1, param2);
  answerBox.value = Number(input1) + Number(input2);
  const subtractedValue = Number(input1) + Number(input2);
  console.log(subtractedValue);
}

equalButton.addEventListener("click", subtract);
