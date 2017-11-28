var PrimeFactors = function() {};

PrimeFactors.for = function(num) {
    solution = [];
    var i = 2;
    while (num > 1) { //60 > 1 // 30 > 1 // 15 > 1 // 15 > 1 // 5 > 1
        if (num % i === 0) { //60 % 2 = 0 // 30 % 2 = 0 //  15 % 2 != 0 // 15 % 3 = 0
            solution.push(i) // [ 2 ] // [2, 2] // [2, 2, 3]
            num = num / i; // num = 30 // num = 15 // num = 5
            //this allows us to use the incrementer to actually set i to 2 again, which is what we want
            i = 1; // i = 1 // i = 1

        }
        i++ // i = 2 // i = 3 // i = 2
    }
    return solution
}

module.exports = PrimeFactors;

// const primeFactors = new PrimeFactors()
console.log(PrimeFactors.for(60)) 