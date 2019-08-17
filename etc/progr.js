function arProgr(a, b, c) {
    while (a <= c) {
        console.log(a);
        a += b;
    }
}

function geomProgr(a, b, c) {
    while (a <= c) {
        console.log(a);
        a *= b;
    }
}


arProgr(2, 8, 40);
