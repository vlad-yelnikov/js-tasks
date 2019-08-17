function random(min, max) {
    console.log(Math.random() * (max - min) + min);
}

function randomInteger(min, max) {
    console.log(parseInt(Math.random() * (max + 1 - min) + min));
}
random(4, 5);
