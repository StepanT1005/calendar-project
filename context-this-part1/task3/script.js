function defer(func, ms) {
    return function () {
        setTimeout(() => func.call(this, ...arguments), ms)
    }
}

const user = {
    name: 'Kate',
    sayHi() {
console.log(`Hello i'm ${this.name}`)
    }
}
const deferredSayHi = defer(user.sayHi, 1000);
console.log(deferredSayHi)
deferredSayHi.call(user);

