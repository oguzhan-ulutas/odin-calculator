// Main operation functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    alert("You are going to infinity. Can't divede by zero.");
  } else {
    return a / b;
  }
}

let num1;
let num2;
let operator;
