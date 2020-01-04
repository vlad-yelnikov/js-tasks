'use strict';

//1

let user = {
    name: 'Tom'
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
let tomFormat = function() {
    format.call(user, '<<<', '>>>');
};
let tomFormatBind = format.bind(user);

//2

function mul(a, b) {
    return a * b;
}
let doubleMul = mul.bind(null, 2);
let qudraMul = mul.bind(null, 4);

//3

function bind(func, context) {
    return function() {
        return func.apply(context);
    };
}
function func() {
    console.log(this.name + ' - ' + this.age);
}
let tom = {
    name: 'Tom',
    age: 20
};
let f = bind(func, tom);

//4
class Player {
    constructor(volume) {
        let _volume = 0;
        function volumeValid(volume) {
            if (volume >= 0 && volume <= 100) {
                _volume = volume;
            }
        }
        volumeValid(volume);
        this.getVolume = function () {
            return _volume;
        };
        this.setVolume = function (volume) {
            volumeValid(volume);
        };
        this.volume = function (volume) {
            if (volume === undefined) {
                return _volume;
            }
            volumeValid(volume);
        };
    }
}

//5

function Summator() {
    const self = this;
    let _firstNumber;
    let _secondNumber;
    function calc() {
        self.result = _firstNumber + _secondNumber;
    }
    this.firstNumber = function(number) {
        if (number === undefined) {
            return _firstNumber;
        }
        if (typeof number === 'number') {
            _firstNumber = number;
            calc();
        }
    };
    this.secondNumber = function(number) {
        if (number === undefined) {
            return _secondNumber;
        }
        if (typeof number === 'number') {
            _secondNumber = number;
            calc();
        }
    };
}


//6

const perimeter = (function() {
    let firstSide;
    let secondSide;
    function operation() {
        return (firstSide + secondSide) * 2;
    }
    return {
        setFirstSide: function(number) {
            firstSide = number;
        },
        setSecondSide: function(number) {
            secondSide = number;
        },
        operation: function() {
            return operation();
        }
    };
})();

const area = (function() {
    let firstSide;
    let secondSide;
    function operation() {
        return firstSide * secondSide;
    }
    return {
        setFirstSide: function(number) {
            firstSide = number;
        },
        setSecondSide: function(number) {
            secondSide = number;
        },
        operation: function() {
            return operation();
        }
    };
})();
