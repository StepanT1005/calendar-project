class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi, I am ${this.name}`)
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`)
    }

    setAge(val){
        if (val < 0) return false;
        this.age = val;
        if (val >=25) this.requestNewPhoto();
        return val;
    }

    static createEmpty() {
        return new User('', null)
    }
}