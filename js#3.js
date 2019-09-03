'use strict';

//#5

function lengthSection(a, b) {
    let sum = 0;

    while (a > sum) {
        sum += b;
    }
    sum -= b;
    let result = a - sum;
    console.log(result);
}

//#6

function showNumbers(n) {
    while (n > 0) {
        let x = n % 10;
        console.log(x);
        n = Math.floor(n / 10);
    }
}

//#7

function sum(a, b) {
    let result = a;
    for (let i = a; i < b; i++) {
        result += i + 1;
    }
    console.log(result);
}

//#8

function factorial(n) {
    let result = 1;
    for (let i = 1; i < n + 1; i++) {
        result *= i;
    }
    console.log(result);
}

//#9

function arraySum() {
    let num;
    let myArray = [];
    do {
        num = prompt('Enter a number', '');
        if (num === '' || num === null || isNaN(num)) break;
        myArray.push(+num);
    } while (true);
    console.log(myArray.reduce((sum, num) => sum + num));
}

//#10

function numbers(a, b) {
    for (let i = a; i <= b; i++) {
        let res = '';
        for (let j = i - a; j >= 0; j--) res += i;
        console.log(res);
    }
}

//#15

function digitN(k, n) {
    for (let i = 1; i <= n - 1; i++) k /= 10;
    if (k >= 1) console.log(parseInt(k % 10));
    else console.log(-1);
}
