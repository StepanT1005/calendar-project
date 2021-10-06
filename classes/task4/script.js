'use strict';

class Order {
    id = String.toString(this.id);
    price = Number(this.price);
    dateCreated = new Date;
    isConfirmed = false;
    dateConfirmed = Date;
    city = String.toString(this.city);
    type = String.toString(this.type);
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = (Math.random() * 1000).toFixed()
    }

    checkPrice() {
        return (this.price > 1000)
    }

    confirmOrder() {
        if (!this.isConfirmed) {
            this.isConfirmed = true;
            this.dateConfirmed = new Date;
        }
    }

    isValidType() {
        return (this.type === 'Buy' || this.type === 'Sell')
    }
}