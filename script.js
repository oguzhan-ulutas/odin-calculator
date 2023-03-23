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
  } else {
    return num2;
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitForValue = null;

updateDisplay();

function updateDisplay() {
  display.textContent = displayValue;
}

buttons.addEventListener("click", function (e) {
  if (!e.target.matches("button")) return;
  //   console.log(e.target.textContent);
  if (e.target.classList.contains("operator")) {
    // console.log(e.target.value);
    startToOperate(e.target.textContent);
    updateDisplay();

    return;
  }
  if (e.target.classList.contains("dot")) {
    inputDot();
    updateDisplay();
    // console.log(e.target.value);
    return;
  }
  if (e.target.classList.contains("ac")) {
    // console.log(e.target.value);
    resetDisplay();
    updateDisplay();
    return;
  }
  if (e.target.classList.contains("c")) {
    // console.log(e.target.value);
    resetDigit();
    updateDisplay();
    return;
  }

  inputNumber(e.target.textContent);
  updateDisplay();
});

function inputNumber(value) {
  if (waitForValue === true) {
    displayValue = value;
    waitForValue = false;
  } else {
    displayValue = displayValue == "0" ? value : (displayValue += value);
  }
}

function inputDot() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}

function resetDisplay() {
  displayValue = "0";
}

function resetDigit() {
  displayValue = displayValue.slice(0, -1);
}

function startToOperate(op) {
  let value = parseFloat(displayValue);

  if (operator && waitForValue) {
    operator = op;
    return;
  }

  if (firstValue === null) {
    firstValue = value;
  } else if (operator) {
    let result = operate(operator, firstValue, value);
    firstValue = result;
    displayValue = String(result);
  }

  waitForValue = true;
  operator = op;
  console.log(displayValue, firstValue, operator, waitForValue);
}
