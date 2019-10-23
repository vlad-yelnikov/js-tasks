'use strict';

const arr = [0, 1, 1, 1, 1, 1, 1];

const binaryArrayToNumber = arr => {
    let number = 0;
    let item = arr.length - 1;
    for (let i = 1; arr[item] != undefined; i *= 2) {
        number += arr[item] * i;
        item--;
    }
    return number;
};
