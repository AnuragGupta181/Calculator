const displayResult = document.getElementById('display-result');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('sub');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('division');
const numberButtons = document.querySelectorAll('.number button');
const pointButton = document.getElementById('point');

let currentOperand = '';
let previousOperand = '';
let operator = '';

// Update the display
function updateDisplay() {
  displayResult.value = currentOperand || '0';
}

// Handle number and point input
function handleNumberClick(event) {
  const input = event.target.textContent;

  // Prevent multiple decimals in the same number
  if (input === '.' && currentOperand.includes('.')) return;

  currentOperand += input;
  updateDisplay();
}

// Handle operator input
function handleOperatorClick(event) {
  const input = event.target.textContent;
  processOperator(input);
}

// Process operator logic
function processOperator(input) {
  if (currentOperand === '' && previousOperand !== '') {
    operator = input;
    return;
  }

  if (currentOperand !== '') {
    if (previousOperand === '') {
      previousOperand = currentOperand;
      currentOperand = '';
    } else {
      compute();
    }
    operator = input;
    updateDisplay();
  }
}

// Perform computation
function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case 'X':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Error: Div by 0';
      break;
    default:
      result = 'Error';
  }

  currentOperand = result.toString();
  previousOperand = '';
  operator = '';
}

// Handle the equal button
function handleEqualClick() {
  if (currentOperand !== '' && previousOperand !== '') {
    compute();
    updateDisplay();
  }
}

// Handle the clear button
function handleClearClick() {
  currentOperand = '';
  previousOperand = '';
  operator = '';
  updateDisplay();
}

// Handle keyboard input
function handleKeyboardInput(event) {
  const key = event.key;

  // Allow only valid inputs: numbers, operators, and specific keys
  if (!isNaN(key) || key === '.') {
    if (key === '.' && currentOperand.includes('.')) return;
    currentOperand += key;
    updateDisplay();
  } else if (['+', '-', '*', '/'].includes(key)) {
    const mappedOperator = key === '*' ? 'X' : key; // Map '*' to 'X'
    processOperator(mappedOperator);
  } else if (key === 'Enter' || key === '=') {
    handleEqualClick();
  } else if (key === 'Backspace') {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
  } else if (key.toLowerCase() === 'c') {
    handleClearClick();
  }
}

// Add event listeners
numberButtons.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});

addButton.addEventListener('click', handleOperatorClick);
subtractButton.addEventListener('click', handleOperatorClick);
multiplyButton.addEventListener('click', handleOperatorClick);
divideButton.addEventListener('click', handleOperatorClick);
equalButton.addEventListener('click', handleEqualClick);
clearButton.addEventListener('click', handleClearClick);
pointButton.addEventListener('click', handleNumberClick);

// Listen for keyboard events
document.addEventListener('keydown', handleKeyboardInput);
