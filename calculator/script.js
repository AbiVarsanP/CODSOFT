// script.js

let display = document.getElementById("display");

// Append numbers or operators to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result when the equals button is clicked
function calculateResult() {
    try {
        // Evaluate the mathematical expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // In case of error (e.g., invalid expression), show an error message
        display.value = "Error";
    }
}
