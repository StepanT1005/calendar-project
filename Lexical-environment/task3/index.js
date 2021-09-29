'use strict'
let memo = 0;

export function add(num){
    memo += num;
}

export function decrease(num){
   memo -= num;
} 

export function reset(){
    memo = 0;
}  

export function getMemo(){
   return memo;
} 
add(5);
decreace(15);

reset();

console.log(getMemo());
