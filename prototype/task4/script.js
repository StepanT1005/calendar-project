const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(fullname) {
    [this.firstName, this.lastName] = fullname.split(' ');
    }
};

user.fullName;
user.fullName = 'Karl Marks';
user.fullName