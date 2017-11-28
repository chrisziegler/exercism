//Most likely need to 'import' this module
var BigInt = require('./big-integer');
//Calculate the number of grains of wheat on a chessboard given that the number
// on each square doubles. And begins on square 1 with 1 grain.
class Grains {
    square() {
        let square16 = BigInt(2).pow(15)
        return square16.toString() // 32768
        //actually returns an object:
        // { [Number: 32768] value: 32768, sign: false, isSmall: true }
        // return BigInt(2).pow(15) gives us the same object
        // return Object.keys(square16) //[ 'value', 'sign', 'isSmall' ]
        // so this first array is not a key - how the fuck do we access it
        // Apparently by using the toString method on it
        //  return square16.toString() // 32768
        // why does the documentation look like it just retuns a numer automatically
        //not an object that you have to access the number off of?
    }
    number() {
        let ninetyThree = BigInt(93)
        //{ [Number: 93] value: 93, sign: false, isSmall: true }
        return ninetyThree['value'] // 93 --thank god actually returns a number
        }

    }



module.exports = Grains
//NODE
const grains = new Grains()
//initial test no aruments square function
console.log(grains.square())



// var Grains = require('./grains');

// describe('Grains', function () {
//   var grains = new Grains();

//   it('square 1', function () {
//     expect(grains.square(1)).toBe('1');
//   });

//   xit('square 2', function () {
//     expect(grains.square(2)).toBe('2');
//   });
//   xit('square 3', function () {
//     expect(grains.square(3)).toBe('4');
//   });
//   xit('square 4', function () {
//     expect(grains.square(4)).toBe('8');
//   });

//   xit('square 16', function () {
//     expect(grains.square(16)).toBe('32768');
//   });