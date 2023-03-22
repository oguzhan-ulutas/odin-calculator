// Main operation functions

function add(a, b) {
  return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
  return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
  return Math.round(a * b * 100) / 100;
}

function divide(a, b) {
  if (b == 0) {
    alert("You are going to infinity. Can't divide by zero.");
  } else {
    return Math.round((a / b) * 100) / 100;
  }
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "x") {
    return multiply(num1, num2);
  } else if (operator == "÷") {
    return divide(num1, num2);
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

console.log(display.textContent);
console.log(buttons);

let displayValue = "0";
updateDisplay();

function updateDisplay() {
  display.textContent = displayValue;
}

buttons.addEventListener("click", function (e) {
  if (!e.target.matches("button")) return;
  //   console.log(e.target.classList);
  if (e.target.classList.contains("operator")) {
    console.log(e.target.value);
    return;
  }
});
