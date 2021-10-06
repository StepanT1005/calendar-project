'use strict'
const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Mike',
        age: 27
    },
    'customer-id-3': {
        name: 'Marry',
        age: 33
    },
}

const getCustomersList = obj => {
    const arr = [];
    for (let key in obj) {
        let copy = {...obj[key]}
        copy.id = key
        arr.push(copy)
    }
    arr.sort((a, b) => a.age - b.age);
    return arr;
  };
  
  getCustomersList(customers);
  console.log(customers);