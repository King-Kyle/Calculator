//LINKS TO HTML KEYS
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const period = document.getElementById('period');
const operator = document.querySelectorAll('.operator');
const digit = document.querySelectorAll(".digit");
//LINK TO HTML SCREEN
const display = document.getElementById("display");
const displayAnswer = document.getElementById("displayAnswer");
//OPERATOR CHOICES
const symbol = "+−×÷";

//MATH FUNCTIONS
let addNum = (num1, num2,) => {return num1 + num2};
let subtractNum = (num1, num2,) => {return num1 - num2};
let multiplyNum = (num1, num2,) => {return num1 * num2};
let divideNum = (num1, num2,) => {return num1 / num2};

//CALLS MATH FUNCTION BASED ON OPERATOR
function operate(num1, num2, symbols){
  if(symbol == "+"){
    return result = addNum(num1, num2);
  } else if(symbol == "−"){
    return result = subtractNum(num1, num2)
  } else if(symbol == "×"){
    return result = multiplyNum(num1, num2)
  } else if(symbol == "÷"){
    return result = divideNum(num1, num2)
  } else {
    console.log("ERROR incorrect input")
  }
}

//INPUTS SELECTED DIGIT ON CLICK
digit.forEach((number) =>{
	number.addEventListener('click', (e) => {
		if (display.textContent == "ERROR"){
			display.textContent = "";
		}
		display.textContent += number.textContent;
	})
});

//INPUTS SELECTED OPERATOR ON CLICK
operator.forEach((operation) =>{
	operation.addEventListener('click', (e) => {
		if (display.textContent == "ERROR"){
			display.textContent = "";
		}
		display.textContent += operation.textContent;
	})
});

//INPUTS DECIMAL POINT ON CLICK
period.addEventListener('click', (e) =>{
	let stringOperations = display.textContent.match(/[^\d()]+|[\d.]+/g);
	if(stringOperations[stringOperations.length -1].indexOf(".") == -1){
		display.textContent += ".";
	}
});

//COMPLETES THE EQUATION
equal.addEventListener('click', (e) =>{
	let stringOperations = display.textContent.match(/[^\d()]+|[\d.]+/g);
	let product = 0;
	for (let i = 0; i < stringOperations.length; i++){
		if(symbol.indexOf(stringOperations[i]) != -1){
			let op = stringOperations[i];
			let num1 = +stringOperations[i-1];
			let num2 = +stringOperations[i+1];
			if(op == "/" && num2 == 0){
				product = "ERROR";
				break;
			}
			product += operate(op, num1, num2);
		}
	}
	//incase of = before finishing operation
	if(stringOperations.length < 3){
		product = display.textContent;
	}
	display.textContent = product;
});

//CLEARS FIELD
clear.addEventListener('click', (e) =>{
	display.textContent = "";
});
