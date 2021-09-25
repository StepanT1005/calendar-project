function calc(expression) {
    const [a, operator, b] = expression.split(' ');
   let result = null;
  switch (operator) {
    case '+':
      result = +a + +b;
       break;
    case '-':
      result = a - b;
       break;
    case '*':
      result = a * b;
      break;
    case '/': 
     result = a / b;
      break;
  }
  return `${expression} = ${result}`
  };
  /////////