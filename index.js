'use strict';
const balance = [1400, 87, -6]
const withdraw = (clients, balances, client, amount) => {
  let ind = clients.indexOf(client);
  if (balances[ind] - amount > 0) {
    return balances[ind] - amount;
  } else {
    return -1;
  }
};

//input

withdraw(['Ann', 'John', 'User'], balance, 'John', 50);
console.log(balance)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//output
//-1
//и массив balances должен быть [1400, 87, -6]