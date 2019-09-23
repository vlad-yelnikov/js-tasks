'use strict';

//1

let calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

//2

function createPlayer(brand, model) {
    return {
        brand: brand,
        model: model,
        displayInfo: function() {
            console.log('brand: ' + this.brand + ' model: ' + this.model);
        }
    };
}

//4

class Player {
    constructor(brand, model) {
        (this.brand = brand),
            (this.model = model),
            (this.displayInfo = function() {
                console.log('brand: ' + this.brand + ' model: ' + this.model);
            });
    }
}
