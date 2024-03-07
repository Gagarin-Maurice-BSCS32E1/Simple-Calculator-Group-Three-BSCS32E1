
let display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function delButton() {
    display.value = display.value.slice(0, -1);
}


function deci(decimal) {
let numbers = display.value.split(/[+\-*/]/);
let lastNumber = numbers[numbers.length - 1];

if (!isNaN(display.value[display.value.length - 1])) {
    if (!lastNumber.includes(decimal)) {
        appendToDisplay(decimal);
    }
}
}

function operatorButton(operator) {
    if (display.value !== "" && !isNaN(display.value[display.value.length - 1])) {
        appendToDisplay(operator);
    }
}

function calculate() {
    if (display.value !== "" && !isNaN(display.value[display.value.length - 1])) {
        const result = eval(display.value);
        document.getElementById("display").value = result;
        display.value = result.toString();
    }
}