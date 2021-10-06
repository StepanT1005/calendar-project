function calculator(a, b) {
    switch (this.operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '/':
        return a / b;
      case '*':
        return a * b;
      default:
        return NaN;
    }
  }
  
  /*
   * Ф-ция multiplier должна быть создана на основе calculator
   * с использования .bind
   * и должна принимать 2 числа и возвращать из произведение
   */
const objMultiplier = {
    operation: '*',
};

let multiplier = calculator.bind(objMultiplier);

  /*
   * Ф-ция summator должна быть создана на основе calculator
   * с использования .bind
   * и должна принимать 2 числа и возвращать из сумму
   */
  const objSummator = {
    operation: '+'
};

let summator = calculator.bind(objSummator)
  
  /*
   * Ф-ция twice должна быть создана на основе calculator
   * с использования .bind
   * и должна принимать 1 число и возвращать это число умноженное на 2
   */

  const objTwice = {
    operation: '*'
};

let twice = calculator.bind(objTwice, 2)