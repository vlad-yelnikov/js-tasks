'use strict';

//2

//3

function rectangle() {
    let firstSide = 0;
    let secondSide = 0;
    let arr = [];
    arr[0] = function check(a, b) {
        if (a > 0 && b > 0) {
            firstSide = a;
            secondSide = b;
        }
    };
    arr[1] = function area() {
        return firstSide * secondSide;
    };
    arr[2] = function perimeter() {
        return (firstSide + secondSide) * 2;
    };
    return arr;
}

//4
function digitSum(k) {
    let sum = 0;
    while (k) {
        sum += k % 10;
        k = parseInt(k / 10);
        console.log(k);
    }
    console.log(sum);
}

function sumDigits(k) {
    console.log(((k - 1) % 9) + 1);
}

let digitSumRec = (k) => {
    if (k < 10) {
        return k;
    } else {
        return 1 + (digitSumRec(k - 1) % 9);
    }
}

function digitSumArr(k) {
    let arr = [];
    while (k > 1) {
        arr.push(parseInt(k % 10));
        k /= 10;
    }
    console.log(arr.reduce((sum, num) => sum + num));
}

digitSumRec(123);
console.log(digitSumRec);
