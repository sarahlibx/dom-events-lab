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
// added 'clear' class to C button operator
const clear = document.querySelector('.clear');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // didn't know what to use this for?
  });
});

// function to allow user to enter an additional number to display
calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    display.textContent += event.target.innerText;
    if (operator === null) {
        num1 = parseInt(display.textContent);
    } else {
        let index = display.textContent.indexOf(operator);
        num2 = parseInt(display.textContent.substring(index + 1));
    }
  }

  // function to add an additional number to calculation following operator
  if (event.target.classList.contains('operator')) {
    display.textContent += event.target.innerText;
    operator = event.target.innerText;
    console.log(operator);
  }

  // calculation function
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

    // clear button function
    if (event.target.classList.contains('clear')) {
      num1 = null;
      num2 = null;
      total = null;
      operator = null;
      display.textContent = '';
      console.log('Calculator cleared!');
    }
});
