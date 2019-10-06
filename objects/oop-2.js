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

//3

let salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};
//spread operator
function maxSalarie1(obj) {
    let arr = Object.values(obj);
    console.log(Math.max(...arr));
}

//apply
function maxSalarie2(obj) {
    let arr = Object.values(obj);
    console.log(Math.max.apply(null, arr));
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

//5

function mul() {
    let result = 1;
    let count = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            result *= arguments[i];
            count++;
        }
    }
    if (count == 0) {
        console.log(0);
    } else {
        console.log(result);
    }
}

//6

let country = {
    name: 'Украина',
    language: 'украинский',
    capital: {
        name: 'Киев',
        population: 2907817,
        area: 847.66
    }
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
