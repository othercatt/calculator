// CALCULATOR STATE
let equationDisplay = document.getElementById('equation-display');
let inputDisplay = document.getElementById('input-display');
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;

// BASIC OPERATIONS
function add(a, b) {
  const answer = (+a + +b);
  console.log(answer);
  return answer;
};

function subtract(a, b) {
  const answer = (+a - +b);
  console.log(answer);
  return answer;
};

function multiply(a, b) {
  const answer = (+a * +b);
  console.log(answer);
  return answer;
};

function divide(a, b) {
  let answer;
  if(b == 0 || b == '0') {
    let msg = "Sorry, I can't do that, Dave.";
    return msg;
  } else if (a == 0 || b == '0') {
    return 0;
  }else {
    answer = (+a / +b);
    if (answer.toString().length > 8) {
      return answer.toFixed(8);
    } else {
      return answer;
    }
    
  }
};

function findRoot(num) {
  return (num ** 0.5);
}

function reverseSign(num) {
  return -num;
}


// CALCULATOR FUNCTIONS
function getAnswer(a, b, operator) {
  let answer = '';
  if (operator == '+') {
    answer = add(a, b);
  } else if (operator == '-') {
    answer = subtract(a, b);
  } else if (operator == '*') {
    answer = multiply(a, b);
  } else if (operator == '/') {
    answer = divide(a, b);
  } 
  console.log(answer); // remove after testing
  inputDisplay.textContent = answer;
  return parseFloat(answer);
};

function clearAll() {
  inputDisplay.textContent = 0;
  equationDisplay.textContent = 0;
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
}


// BUTTON EVENT LISTENERS
let resetFlag = false;
const buttons = document.querySelectorAll('button')
const numButtons = document.getElementsByClassName('num-button');

function clickButton() {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      if (buttons[i].classList.contains('num-button')) {
        console.log(buttons[i].value);
        if (buttons[i].value == '.' && inputDisplay.textContent.includes('.')) {
          // pass if one decimal exists already
        } else if (inputDisplay.textContent == '0' || inputDisplay.textContent == 0) {
          resetFlag = false;
          inputDisplay.textContent = buttons[i].value;
        } else if (secondOperand || resetFlag) {
          resetFlag = false;
          inputDisplay.textContent = buttons[i].value;
        } else {
          inputDisplay.textContent += buttons[i].value;
        }
      } else if (buttons[i].classList.contains('operator-button')) {
        if (firstOperator == null) {
          firstOperator = buttons[i].value;
          firstOperand = parseFloat(inputDisplay.textContent);
          equationDisplay.textContent = `${firstOperand} ${firstOperator}`;
          inputDisplay.textContent = 0;
        } else if (firstOperator) { 
          secondOperand = parseFloat(inputDisplay.textContent);
          let answer = getAnswer(firstOperand, secondOperand, firstOperator);
          equationDisplay.textContent = `${answer} ${buttons[i].value}`;
          firstOperand = answer; 
          inputDisplay.textContent = 0;
          secondOperand = null;
          firstOperator = buttons[i].value;
        }
      } else if (buttons[i].classList.contains('equal-button')) {
        if (firstOperand && firstOperator) {
          secondOperand = parseFloat(inputDisplay.textContent);
          let answer = getAnswer(firstOperand, secondOperand, firstOperator);
          equationDisplay.textContent += ' ' + secondOperand + ' =';
          firstOperand = answer;
          resetFlag = true; 
          secondOperand = null;
          firstOperator = null;
        }
        
      } else if (buttons[i].classList.contains('clear-button')) {
        clearAll();
      
      } else if (buttons[i].classList.contains('negative-button')) {
        inputDisplay.textContent = -1 * parseFloat(inputDisplay.textContent);
      
      } else if (buttons[i].classList.contains('square-root-button')) {
        equationDisplay.textContent = `√ ${inputDisplay.textContent}`
        inputDisplay.textContent = parseFloat(inputDisplay.textContent) ** (0.5);
        resetFlag = true;
      }

    })
  }
}
clickButton();
