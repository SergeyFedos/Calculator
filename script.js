const display = document.getElementById('display');
display.maxLength = 10;

let curValue = [];
let nextValue = 0;
let result = 0;
let operator = '';



function calc(operat) {
  
  operator = operat;
  
 curValue = [];
 nextValue = result;

 console.log(nextValue);

}

function operate(number1, number2, operator) {
  

  let calculation = 0;
  
  console.log(`${number1} it's numb1`);
  console.log(`${number2} it's numb1`);
  console.log(`${operator} it's oper`);
if ( operator === '+') { calculation = add(number1, number2)

} else if ( operator === '-') { calculation = subtract(number1, number2)

} else if ( operator === '*') { calculation = multiply(number1, number2)

} else if ( operator === '/') { calculation = divide(number1, number2)

}
display.value = Number(calculation.toFixed(9));
result = calculation;

curValue = [];
operator = '';


}
function backSpace() {
  let str = display.value
  let newStr = str.slice(0, -1);
  curValue.pop();
  let newNumb = Number(newStr);
  result = newNumb;
  display.value = newNumb;
  console.log(curValue);



}

function showDisplay(numb){
  result = 0;
 curValue.push(numb);
  result = Number(curValue.join(''))
  display.value = result;

}
function clearDisplay() {
  display.value = '';
result = 0;
curValue = [];

}

function add(a,b) {
  return a + b;
}
function subtract(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a * b;
}
function divide(a,b) {
  if (b === 0) {
    display.value = "Error.Don't crush my calc!"
  } else {
  return a / b;
  
}

}


