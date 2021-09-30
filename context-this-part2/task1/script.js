'use strict'
const event = {
message: 'Welcome to the party!',
guests: [{name: 'John', age: 15, email: 'example@server.com'},
{name: 'Ann', age: 28, email: 'example@server.com'},
{name: 'Anatoly', age: 48, email: 'example@server.com'}
],
getInvitations() {
    return this.guests
    .filter(({age}) => age >=18)
    .map(({name, email}) =>({email,
    message: `Dear ${name}! ${this.message}`}))
    }
}

console.log(event.getInvitations())