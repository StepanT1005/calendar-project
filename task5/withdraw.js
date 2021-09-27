'use strict';
const balancesArr = [1400, 87, -6]

export const withdraw = (clients, balances, client, amount) => {
    let ind = clients.indexOf(client);
    if (balances[ind] - amount > 0) {
        balances[ind] = balances[ind] - amount;
      return balances[ind];
    } else {
      return -1;
    }
  };

 let aaa = withdraw(['Ann', 'John', 'User'], balancesArr, 'John', 50);
console.log(aaa);
console.log(balancesArr)
  

//input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//output
//-1
//и массив balances должен быть [1400, 87, -6]