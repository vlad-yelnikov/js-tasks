// Array operations.

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
styles.shift();
styles.unshift('Rap', 'Reggae');

// Sum input numbers

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt('enter a number', 0);
        if (value === '' || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}


// A maximal subarray

function getMaxSubSum(arr)