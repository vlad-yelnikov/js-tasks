'use strict'

function Accumulator (startingValue) {
    this.value = startingValue;
    this.read = function(newValue) {
        return this.value += newValue;
    }
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(5); // adds the user-entered value
accumulator.read(4); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values