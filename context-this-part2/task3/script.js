'use strict'
function sumOfSquares() {
    return [...arguments].reduce((acc, elem) => acc + (elem ** 2), 0)
}

console.log(sumOfSquares(2, 4, 5))