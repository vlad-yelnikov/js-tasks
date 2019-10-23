'use strict';

let arr = [5, 'joe', true, 8, 56];

function max(array) {
    let arr = array.filter(item => {
        if (typeof item === 'number') return true;
    });
    return Math.max(...arr);
}