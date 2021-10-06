function getOwnProps(obj) {
const arr = [];
for(let prop in obj) {
    if (obj.hasOwnProperty(prop) && (typeof(obj[prop]) !== 'function'))
    arr.push(prop)
}
return arr;
}

const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`)
    },
    stop() {
        console.log(`${this.name} stopped`)
    },
};

const ship = {
    __proto__: vehicle,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}