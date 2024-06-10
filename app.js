const firstInput = document.querySelector(".first_input");
const secondInput = document.querySelector(".second_input");
const equalBtn = document.querySelector(".equal_btn");
const output = document.querySelector(".result");

function addedValue() {
  const input1 = Number(firstInput.value);
  const input2 = Number(secondInput.value);
  output.value = input1 + input2;
  console.log(input1 + input2);
  if (isNaN(input1) || isNaN(input2)) {
    alert("User, please stop using alphabets in this calculator!");
    firstInput.value = "";
    secondInput.value = "";
  } else {
    input1 + input2;
  }
}
// function addedValue2() {
//   output.value = Number(firstInput.value) + Number(secondInput.value);
//   if (isNaN(Number(firstInput.value)) || isNaN(Number(secondInput.value))) {
//     alert("User, please stop using alphabets in this calculator!");
//     firstInput.value = secondInput.value = "";
//   } else {
//     Number(firstInput.value) + Number(secondInput.value);
//   }
// }

addedValue();
equalBtn.addEventListener("click", addedValue);
firstInput.addEventListener("input", addedValue);
secondInput.addEventListener("input", addedValue);

const subFirstInput = document.querySelector(".first-input");
const subSecondInput = document.querySelector(".second-input");
const equalButton = document.querySelector(".equalButton");
const answerBox = document.querySelector(".answer");

function subOperator() {
  const inputOne = Number(subFirstInput.value);
  const inputTwo = Number(subSecondInput.value);
  console.log(inputOne, inputTwo);
  answerBox.value = inputOne - inputTwo;
  console.log(inputOne - inputTwo);
  if (isNaN(inputOne) || isNaN(inputTwo)) {
    alert("please stop using alphabets");
    subFirstInput.value = "";
    subSecondInput.value = "";
  } else {
    inputOne - inputTwo;
  }
}

subOperator();
equalButton.addEventListener("click", subOperator);
subFirstInput.addEventListener("input", subOperator);
subSecondInput.addEventListener("input", subOperator);

const mulFirstInput = document.querySelector(".firstInput");
const mulSecondInput = document.querySelector(".secondInput");
const equalSign = document.querySelector(".equalTo");
const printOutput = document.querySelector(".resultField");

function multiply() {
  const type1 = Number(mulFirstInput.value);
  const type2 = Number(mulSecondInput.value);
  printOutput.value = type1 * type2;
  if (isNaN(type1) || isNaN(type2)) {
    alert("Don't alphebets in this Calculator");
    mulFirstInput.value = "";
    mulSecondInput.value = "";
  } else {
    type1 * type2;
  }
}

multiply();
equalSign.addEventListener("click", multiply);
mulFirstInput.addEventListener("input", multiply);
mulSecondInput.addEventListener("input", multiply);

const divFirstInput = document.querySelector(".firstField");
const divSecondInput = document.querySelector(".secondField");
const divEqualBtn = document.querySelector(".equalField");
const divResult = document.querySelector(".result_field");

function divide() {
  const typeA = Number(divFirstInput.value);
  const typeB = Number(divSecondInput.value);
  divResult.value = typeA / typeB;
  if (isNaN(typeA) || isNaN(typeB)) {
    alert("User stop doing this!!");
    divFirstInput.value = "";
    divSecondInput.value = "";
  } else {
    typeA / typeB;
  }
}

divEqualBtn.addEventListener("click", divide);
divFirstInput.addEventListener("input", divide);
divSecondInput.addEventListener("input", divide);

const expFirstInput = document.querySelector(".firstBox");
const expSecondInput = document.querySelector(".secondBox");
const expEqualSign = document.querySelector(".equalBox");
const expResult = document.querySelector(".resultBox");

function exponential() {
  const sample1 = +expFirstInput.value;
  const sample2 = +expSecondInput.value;
  expResult.value = sample1 ** sample2;
  if (isNaN(sample1) || isNaN(sample2)) {
    alert("For the last time, stop typing alphabets");
    expFirstInput.value = "";
    expSecondInput.value = "";
  } else {
    sample1 ** sample2;
  }
}

exponential();
expEqualSign.addEventListener("click", exponential);
expFirstInput.addEventListener("input", exponential);
expSecondInput.addEventListener("input", exponential);
