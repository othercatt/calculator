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
    let msg = "I'm sorry Dave. I'm afraid I can't do that.";
    return msg;
  } else {
    answer = (+a / +b);
    return answer.toFixed(8);
    console.log(answer);
  }
};

function findRoot(num) {
  return (num ** 0.5);
  console.log(num ** 0.5);
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
  console.log(answer);
  inputDisplay.textContent = answer;
  return answer;
};

function clearAll() {
  inputDisplay.textContent = 0;
  equationDisplay.textContent = 0;
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
}

function inputOperand() {

}

function setOperator(number, operator) {
  if (firstOperand == null) {
    firstOperand = number;
    equationDisplay.textContent = number + ' ' + operator + ' ';
    inputDisplay.textContent = '0';
  } else {
    secondOperand = number;
    getAnswer(firstOperand, secondOperand, operator);
    equationDisplay.textContent += number;
  }
}


function updateInputDisplay(input) {
  if (
      inputDisplay.textContent == '0' || 
      inputDisplay.textContent == 0 || 
      secondOperand != null
      ) {
    secondOperand = null;
    inputDisplay.textContent = input;  
  } else {
    inputDisplay.textContent += input;
  }
}


// BUTTON EVENT LISTENERS
const buttons = document.querySelectorAll('button')
const numButtons = document.getElementsByClassName('num-button');

function clickButton() {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      if (buttons[i].classList.contains('num-button')) {
        let btnValue = buttons[i].value;
        inputOperand(btnValue);
        updateInputDisplay(btnValue);
      } else if (buttons[i].classList.contains('clear-button')) {
        clearAll();
      } else if (buttons[i].classList.contains('operator-button')) {
        setOperator(inputDisplay.textContent, buttons[i].value);
      } else if (buttons[i].classList.contains('equal-button')) {
        secondOperand = inputDisplay.textContent;
        getAnswer(firstOperand, secondOperand, firstOperator);
        
      }
    }); 
  }
};
clickButton();


// event listener to check button click
//    if number button
//        add to display value
//    if decimal
//        check if decimal already in input value
//            if no 
//              add to inputDisplay
//    if operator
//       set symbol as first operator
//       check if secondOperand
//          if no
//              set inputDisplay as firstOperand
//              update equationDisplay to first operand and first oeprator  
//          if yes
//              (this code block can be a function used by '=')
//              set inputDisplay as secondOperand
//              perform calculation
//              set outcome as first operand
//              set null as second operand
//              set operator as first operator
//
//    if equal
//      check if secondOperand
//          if no
//              do nothing
//          if yes
//              set inputDisplay as secondOperand
//              perform calculation
//              set outcome as first operand
//              set null as second operand
//              set operator as first operator
// 
