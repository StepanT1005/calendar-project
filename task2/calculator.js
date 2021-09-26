export const getSquaredNumbers = arr =>
arr.map(num => num * num);

export const getOddNumbers = numbers => numbers.filter(num =>(num % 2 === 1));

export default (a, b) => a + b;