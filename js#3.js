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

// lengthSection(250, 90);

//#6

//#7

function sum(a, b) {
    let sum = a;
    for (let i = a; i++; i < b) {
        sum += 1;
    }
    console.log(sum);
}

sum(3, 7);