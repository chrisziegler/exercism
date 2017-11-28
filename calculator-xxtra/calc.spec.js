const Calculator = require('./calc')

describe('Calculator', function(){
    const calc = new Calculator
    it('adds 2 numbers together', function() {
        expect(calc.add(2, 3)).toBe(5)
    });
    it('subtracts the 2nd number from the first', function() {
        expect(calc.subtract(4, 3)).toBe(1)
    });
    it('it multiplies 2 numbers', function(){
        expect(calc.multiply(4, 2)).toBe(8)
    });
    it('it divides 1st number by 2nd number', function() {
        expect(calc.divide(4, 2)).toBe(2)
    });
});