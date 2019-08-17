// Uppercase the first character

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

//   console.log( ucFirst("john") );

//Check for spam

function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx');
}

// console.log(checkSpam('dsfViaXXx'));

// Truncate the text

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '...';
    } else {
        return str;
    }
}

// console.log(truncate('fafafa6676', 8));

// Extract the money

function extractCurrencyValue(str) {
    return +str.slice(1);
}
// console.log(extractCurrencyValue('&42834'));