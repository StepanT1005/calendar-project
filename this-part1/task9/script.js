function bind(func, context) {
    // const a = context;
    return function() {
        func.call(context) 
    }
}

const user = {
    name: 'Henry',
}
const user1 = {
    name: 'John',
}

function sayHi() {
console.log(this.name);
}
let newBind = bind(sayHi, user);
