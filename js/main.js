//LINKS TO HTML BUTTONS
const equal = document.getElementById('equal');
equal.addEventListener('click', operate);

const operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    let operationButton = operator[i];
    operationButton.addEventListener('click', assignOperator);
}

const digit = document.getElementsByClassName('digit');
for (let j = 0; j < digit.length; j++) {
    let numberBtn = digit[j];
    numberBtn.addEventListener('click', displayNumber)
}

const clear = document.getElementById('clear');
clear.addEventListener('click', clearAll);

//LINKS TO HTML SCREEN
const display = document.getElementById('display');
const displayAnswer = document.getElementById('displayAnswer');

//CALCULATION GLOBALS
let value = 0;
let num1 = 0
let num2 = 0
let operation = '';
let didOperate = false;

//CALLS MATH FUNCTION BASED ON OPERATOR
function operate() {
    if (operation === '+') {
       value = num1 + num2;
    } else if (operation === '-') {
        value = num1 - num2;
    } else if (operation === '*') {
        value = num1 * num2;
    } else {
        value = num1 / num2;
    }
    display.textContent = num1 + operation + num2;
    displayAnswer.textContent = value;
    num1 = value;
    num2 = 0;
    didOperate = false;
    operation = '';
    console.log({ num1, num2, operation, value });
}

//INPUTS SELECTED DIGIT ON CLICK
function displayNumber() {
    if (value == 0){
        value = this.innerHTML;
    } else {
        value = value + this.innerHTML;
    }

    if (didOperate == true) {
        num2 = parseFloat(value);
    }
    // if(displayValue.includes('.')) {
    //
    // }
    display.textContent = value;
    console.log({ num1, num2, operation, value });
}

//COMPLETES THE EQUATION
function assignOperator() {
    if(didOperate === false) {
        num1 = parseFloat(value);
        if (this.innerHTML == '+') {
            operation = '+';
        } else if (this.innerHTML == '−') {
            operation = '-';
        } else if (this.innerHTML == '×') {
            operation = '*';
        } else {
            operation = '/';
        }
        didOperate = true;
        value = '';
    } else {
        num2 = parseFloat(value);
    }
    if(num1 && num2 && operation) {
        operate();
        num1 = parseFloat(value);
        if (this.innerHTML == '+') {
            operation = '+';
        } else if (this.innerHTML == '−') {
            operation = '-';
        } else if (this.innerHTML == '×') {
            operation = '*';
        } else {
            operation = '/';
        }
        didOperate = true;
        value = '';
    }
    console.log({ num1, num2, operation, value });
}

//CLEARS FIELD
function clearAll() {
	display.textContent = "";
  displayAnswer.textContent = "";
  value = 0;
  didOperate = false;
  operation = '';
  num1 = 0;
  num2 = 0;
}
