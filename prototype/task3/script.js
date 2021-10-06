function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`)
};
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`)
};
User.prototype.setAge = function(newAge) {
    this.age = newAge;
if(newAge >= 25){
    console.log(`New photo request was sent for ${this.name}`)
};
return (newAge > 0) ? newAge: false;
};

const user1 = new User('John', 15);