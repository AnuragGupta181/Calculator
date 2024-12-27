// Select input and output fields
let input_display = document.querySelector('#input-text');
let output_display = document.querySelector('#output-text');

// Select buttons
let buttons = document.querySelectorAll('.normal_button');
let clear_button = document.querySelector('#clear');
let equal_button = document.querySelector('#equal');
let operations = document.querySelectorAll('.operation');

// Add click event to number buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input_display.value += button.innerHTML;
    });
});

// Add click event to operation buttons
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        input_display.value += operation.innerHTML;
    });
});

// Evaluate the expression
equal_button.addEventListener('click', () => {
    try {
        // Replace 'x' with '*' for multiplication
        let expression = input_display.value.replace(/x/gi, '*');
        // Evaluate the expression
        output_display.value = eval(expression);
    } catch (error) {
        output_display.value = 'Error!';
    }
});

// Clear the input and output
clear_button.addEventListener('click', () => {
    input_display.value = '';
    output_display.value = '';
});









// // Select input and output fields
// let input_display = document.querySelector('#input-text');
// let output_display = document.querySelector('#output-text');

// // Select buttons
// let buttons = document.querySelectorAll('.normal_button');
// let clear_button = document.querySelector('#clear');
// let equal_button = document.querySelector('#equal');
// let operations = document.querySelectorAll('.operation');

// // Add click event to number buttons
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         input_display.value += button.innerHTML;
//     });
// });

// // Add click event to operation buttons
// operations.forEach((operation) => {
//     operation.addEventListener('click', () => {
//         input_display.value += operation.innerHTML;
//     });
// });

// // Evaluate the expression (Send to backend on "=" click)
// equal_button.addEventListener('click', () => {
//     const expression = input_display.value.replace(/x/g, '*'); // Replace 'x' with '*'

//     // Send the expression to the Python backend
//     fetch('http://127.0.0.1:5000/calculate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ expression: expression }),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             output_display.value = data.result; // Display the result from the backend
//         })
//         .catch((error) => {
//             output_display.value = 'Error!';
//             console.error('Error:', error);
//         });
// });

// // Clear the input and output
// clear_button.addEventListener('click', () => {
//     input_display.value = '';
//     output_display.value = '';
// });
