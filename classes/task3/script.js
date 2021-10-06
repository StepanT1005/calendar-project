// class Wallet {
//     #balance = 0;

//     getBallance() {
//         return this.#balance;
//     }

//     deposit(count) {
//         this.#balance += count;
//     }

//     withdraw(count) {
//         this.#balance > count? this.#balance -= count: console.log('No enough funds')
//     }
// }


export class Wallet {
    balance = 0;

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if(amount > this.balance) {
        console.log('No enough funds');
        return
       }
       this.balance -= amount;
    }
}

