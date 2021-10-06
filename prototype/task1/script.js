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