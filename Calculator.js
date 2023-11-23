// Simple Calculator Mini Project with User Input

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return 'Cannot divide by zero';
    }
  }
  
  // Function to perform operations based on user input
  function calculate(operator, num1, num2) {
    switch (operator) {
      case 'add':
        return add(num1, num2);
      case 'subtract':
        return subtract(num1, num2);
      case 'multiply':
        return multiply(num1, num2);
      case 'divide':
        return divide(num1, num2);
      default:
        return 'Invalid operator';
    }
  }
  
  // Get user input
  let operator = prompt('Enter an operator (add, subtract, multiply, divide):');
  let number1 = parseFloat(prompt('Enter the first number:'));
  let number2 = parseFloat(prompt('Enter the second number:'));
  
  // Check if the input is valid
  if (isNaN(number1) || isNaN(number2)) {
    console.log('Invalid input. Please enter valid numbers.');
  } else {
    // Perform the calculation
    let result = calculate(operator, number1, number2);
    console.log(`Result of ${operator} ${number1} and ${number2} is: ${result}`);
  }
  