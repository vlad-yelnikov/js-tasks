"use strict"

let calculator = {
    read(a,b) {
        this.a = a;
        this.b = b;
    },

    sum() {
        console.log(this.a + this.b);
    },

    mul() {
        console.log(this.a * this.b);
    }
};

calculator.read(3,5);
calculator.sum();
calculator.mul();
