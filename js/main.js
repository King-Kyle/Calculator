let result = 0;

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

let addNum = (a, b) => {return a + b};
let subtractNum = (a, b) => {return a - b};
let multiplyNum = (a, b) => {return a * b};
let divideNum = (a, b) => {return a / b};

function operate(num1, num2, operator){
  let operator = clicked_id;
  if(operator == add){
    return addNum(num1, num2);
  } else if(operator == subtract){
    return subtractNum(num1, num2)
  } else if(operator == multiply){
    return multiplyNum(num1, num2)
  } else if(operator == divide){
    return divideNum(num1, num2)
  }
}

let displayValue = (clicked_id) =>{
  let display = document.getElementById("display");
  let selection = clicked_id;
  switch(selection){
    case divide:
      return display.textContent = "÷";
      break;
    case multpily:
      return display.textContent = "x";
      break;
    case add:
      return display.textContent = "+";
      break;
    case subtract:
      return display.textContent = "-";
      break;
    case selection === "one":
      return display.textContent = "1";
      break;
    case selection === "two":
      return display.textContent = "2";
      break;
    case selection === "three":
      return display.textContent = "3";
      break;
    case selection === "four":
      return display.textContent = "4";
      break;
    case selection === "five":
      return display.textContent = "5";
      break;
    case selection === "six":
      return display.textContent = "6";
      break;
    case selection === "seven":
      return display.textContent = "7";
      break;
    case selection === "eight":
      return display.textContent = "8";
      break;
    case selection === "nine":
      return display.textContent = "9";
      break;
    case selection === "zero":
      return display.textContent = "0";
      break;
    case selection === "period":
      return display.textContent = ",";
      break;
    case selection === "clear":
      return display.textContent = " ";
      break;
    case selection === "equal":
      return display.textContent = "=";
      break;
  }
};
