
class Calculator  {
    add(a, b) {
        return a + b
    }
    subtract(a, b) {
        return a - b
    }
    multiply(a, b) {
        return a * b
    }
    divide(a, b) {
        return a / b 
    }
}
module.exports = Calculator
const divide = new Calculator
console.log(divide.divide(156, 12));

//remove new Object instantiation from Jasmine spec
// const Calculator = ( () =>  {
//     return {
//         add: function(a, b) {
//             return a + b
//         },
//         subtract: function(a, b) {
//             return a - b
//         },
//         multiply: function(a, b) {
//             return a * b
//         },
//         divide: function(a, b) {
//             return a / b 
//         }
//     }
// })();

// module.exports = Calculator
//run in terminal $node calc.js
// console.log(Calculator.divide(156, 12));