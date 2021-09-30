const user = {
    firstName: null,
    lastName: null,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullName) {
    [this.firstName, this.lastName] = [...fullName.split(' ')];
    }
}

user.setFullName('John Doe')
console.log(user.getFullName())

user.setFullName('Tony Stark')
console.log(user.getFullName())