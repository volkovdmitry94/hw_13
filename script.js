function isNumber(x) {
    if (x === '' ) {
        return false;
    }
    const numX = +x;
    if (isNaN(numX)) {
        return false;
    } else {
        return true;
    }
}


// Task 1
const firstValue = document.getElementById('first_value');
const secondValue = document.getElementById('second_value');
const operator = document.getElementById('operator');
const resCalc = document.getElementById('res_calc');

function calc() {
    if (!firstValue.value || !secondValue.value) {
        alert('Empty input!');
        return;
    }

    let result;

    switch (operator.value) {
        case '+':
            result = +firstValue.value + +secondValue.value;
            break;
        case '-':
            result = firstValue.value - secondValue.value;
            break;
        case '/':
            result = firstValue.value / secondValue.value;
            break;
        case '*':
            result = firstValue.value * secondValue.value;
            break;
    }

    resCalc.textContent = result;
}


// Task 2
const itemInput = document.getElementById('item_input');
const sumItems = document.getElementById('sum_item');
const arrayResult = document.getElementById('array_result');

let array = [];

function addItem() {
    let input = itemInput.value;

    if (!isNumber(input)) {
        alert('Empty input or String!');
        return;
    }

    array.push(+input);

    let sumElements = 0;
    for (const element of array) {
        sumElements += element;
    }

    sumItems.textContent = String(sumElements);
    arrayResult.textContent = JSON.stringify(array);
}


// Task 3
const numberInput = document.getElementById('number_input');
const reverseResult = document.getElementById('reverse_result');

function reverseNumber() {
    if (!isNumber(numberInput.value)) {
        alert('Empty input or String!');
        return;
    }

    let number = Math.trunc(+numberInput.value); // 15.654 => 15

    let reverseNumber = 0;
    let numberOfDigits = (number >= 0) ? String(number).length : String(number).length - 1;
    // without check: -89 = 3, 89 = 2

    for (let i = numberOfDigits; i > 0; i--) {
        let powerOfTen = 10 ** (i - 1);
        let currentPosition = (number % 10) * powerOfTen;
        reverseNumber += currentPosition;
        number = Math.trunc(number / 10);
    }

    reverseResult.textContent = String(reverseNumber);
}