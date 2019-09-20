'use strict';
//1

let user = {
    name: 'Cris',
    surname: 'Simons'
};

user.name = 'Braun';
delete user.name;

//2

let car = {
    model: 'corolla',
    speed: 120,
    run: function() {
        console.log(`${car.model} rides at a speed of ${car.speed}`);
    },
    stop: function() {
        console.log(`${car.model} stopped`);
    }
};

//3

let tv = {
    currentChannel: 1,
    nextChannel: function() {
        this.currentChannel++;
    },
    previousChannel: function() {
        this.currentChannel--;
    },
    setChannel: function(n) {
        this.currentChannel == n;
    }
};

tv.setChannel(5);
tv.nextChannel();
tv.nextChannel();
tv.previousChannel();
console.log(tv.currentChannel);

//5

let employee = {
    John: {
        age: 28,
        expirience: 1,
        languages: ['Java', 'Javascript']
    },
    Bill: {
        age: 30,
        expirience: 5,
        languages: ['C++', 'Javascript', 'SQL']
    },
    Mike: {
        age: 32,
        expirience: 4,
        languages: ['Java', 'Python', 'SQL']
    }
};
