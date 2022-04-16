// OPERATIONS
function add(a, b) {
  const answer = (a + b);
  console.log(answer);
};

function subtract(a, b) {
  const answer = (a - b);
  console.log(answer);
};

function multiply(a, b) {
  const answer = (a * b);
  console.log(answer);
};

function divide(a, b) {
  let answer;
  if(b == 0) {
    let msg = "I'm sorry Dave. I'm afraid I can't do that.";
    return msg;
  } else {
    answer = (a / b);
    return answer.toFixed(8);
    console.log(answer);
  }
};



// MATH FUNCTIONS
function getAnswer(a, b, operator) {
  let answer;
  if (operator == '+') {
    answer = add(a, b);
  } else if (operator == '-') {
    answer = subtract(a, b);
  } else if (operator == '*') {
    answer = multiply(a, b);
  } else if (operator == '/') {
    answer = divide(a, b);
  }
  return answer;
};