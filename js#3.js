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
