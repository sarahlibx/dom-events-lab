// num = button number
// operator = button operator
// equals = button equals

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let num1 = null;
let num2 = null;
let total = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});

calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    display.textContent += event.target.innerText;
    if (operator === null) {
        num1 = parseInt(display.textContent);
    } else {
        let index = display.textContent.indexOf(operator);
        num2 = parseInt(display.textContent.substring(index));
    }
  }
  if (event.target.classList.contains('operator')) {
    display.textContent += event.target.innerText;
    operator = event.target.innerText;
    console.log(operator);
    
  }
  if (event.target.classList.contains('equals')) {
        console.log('hello');
        if (operator === '*') {
        total = parseInt(num1) * parseInt(num2);
        }
        else if (operator === '-') {
            console.log('subtract');
        total = num1 - num2;
        }
        else if (operator === '+') {
        total = num1 + num2;
        }
        else if (operator === '/') {
        total = num1 / num2;
        }
        display.textContent = total;
    }
});
