const wallet = {
    transactions: [15, 4, 55, 10],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },

}

console.log(wallet.getMax());
console.log(wallet.getMin())
