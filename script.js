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

let num1;
let num2;
let operator;
let array = [];

const displayLive = document.querySelector(".display");
const buttonsNum = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const c = document.querySelector(".c");

// Displays the the clicked numbers on the display area.
displayLive.textContent = "";

function display() {
  let displayValue;
  buttonsNum.forEach((button) =>
    button.addEventListener("click", () => {
      // Clears display in multiple operations. Like 2+5-4*8.
      if (array.length == 0) {
        displayLive.textContent = "";
      } else if (array.length > 10) {
        alert("Too much number.");
        clearAll();
      } else if (array.includes(".") && button.textContent == ".") {
        alert("Only one dot allowed, in a number");
        clearAll();
      }

      displayLive.textContent += button.innerText;
      array.push(button.innerText);
    })
  );
}

display();

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (!num1) {
      num1 = Number(array.join(""));
      operator = op.innerText;
      displayLive.textContent = "";
      array = [];
    } else {
      // Clears display in multiple operations. Like 2+5-4*5.
      if (array.length == 0) {
        displayLive.textContent = "";
      }
      num2 = Number(array.join(""));
      array = [];
      num1 = operate(operator, num1, num2);
      displayLive.textContent = num1;
      operator = op.innerText;
    }
  });
});

equal.addEventListener("click", () => {
  num2 = Number(array.join(""));
  num1 = operate(operator, num1, num2); // In case user click another operator after the equal.
  displayLive.textContent = num1;
  array = [];
});

function clearAll() {
  window.location.reload();
}

// Clears all window when ac cliked
ac.addEventListener("click", clearAll);

// Clear last input
c.addEventListener("click", () => {
  array = array.slice(0, -1);
  displayLive.textContent = array.join("");
});
