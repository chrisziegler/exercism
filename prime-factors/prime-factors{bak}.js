/* APPARENTLY NOT OPTIMIZED FOR THE LAST TEST, OTHERWISE PROUD OF THE FACT THAT 
I WAS ABLE TO THINK THIS ONE THROUGH AND INCORPORATE A RECURSIVE FUNCTION.
I'M GUESSING THE SOLUTION INVOLVING FINDING ALL FACTORS FIRST MAKES THE PROGRAM 
UNWIELDY WHEN TESTING SOME NUMBER IN THE 10'S OF BILLIONS.
THINK I JUST FIGURED IT OUT BY LOOKING AT THE EXPECTED ANSWER FOR THE
93,819,012,551 BILLION TEST - [ 11, 9539, 894119 ]
THE SOLUTION IS NOT TO FIND ALL FACTORS - BUT THE smallest PRIME FACTOR */

/* NEEDS REFACTORING  FOR THE LAST (94 BILLION TEST), I CAN SEE NOW THAT I DONT
WANT TO GENERATE ALL FACTORS - ONLY THE SMALLEST PRIME FACTOR - AND REDUCE THE
LENGTH OF MY WHILE LOOP INCREMENTALLY TO WHITTLE DOWN THESE LARGE NUMBERS 
POSTING BOTH NO_PEEK ITERATIONS SIMULTANEOUSLY/CONSECUTIVELY */

class PrimeFactors {
    // constructor(){
    //     this.dividend,this.factors, this.allPrimeFactors;
    // }
    for(num) {
        this.dividend = num
        this.factors = []
        this.allPrimeFactors = []
        if(num === 1) return this.factors
        let i = 2;
        while (i <= num) {
            if(num % i === 0) this.factors.push(i) 
            i++
        }
        // console.log(this.factors) // [ 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 ]
        this.primes(this.factors)
        return this.allPrimeFactors
    }
    primes(factors){
        let i = 0, length = this.factors.length;  // 11 
        while(i < length){
            this.optimusPrimes(factors[i])
            i++
        }
        return this.allPrimeFactors
    }
    optimusPrimes(factor) {
        if (this.dividend % factor === 0) {
            let quot = this.dividend / factor
            this.allPrimeFactors.push(factor)
            this.dividend = quot
            this.optimusPrimes(factor)
        }
        else return 
    } 
}

const forJasmine = new PrimeFactors()
module.exports = forJasmine

//NODE
const primeFactors = new PrimeFactors()
console.log(primeFactors.for(60)) 







// class PrimeFactors {
//     constructor(){
//         this.num = 0
//         this.dividend = 0
//         this.factors = []
//         this.allPrimeFactors = []
//     }

//     for(num) {
//         this.num = num
//         this.dividend = num
//         if(num === 1) return this.factors
//         let i = 2;
//         while (i <= num) {
//             if(num % i === 0) this.factors.push(i)  // [ 2, 3, 5, 6, 10, 15, 30 ]
//             i++
//         }
//         return this.primes(this.factors)
//     }
//     primes(factors){
//         let i = 0, length = this.factors.length;
//         while(i < length){
//             this.optimusPrimes(factors[i])
//             i++
//         }
//         return this.allPrimeFactors
//     }
//     optimusPrimes(factor) {
//         if (this.dividend % factor === 0) {
//             let quot = this.dividend / factor
//             this.allPrimeFactors.push(factor)
//             this.dividend = quot
//             this.optimusPrimes(factor)
//         }
//         else return   
//     } 
// }

// const forJasmine = new PrimeFactors()
// module.exports = forJasmine

// //NODE
// // const primeFactors = new PrimeFactors()
// // console.log(primeFactors.for(2))




//First test running iteration
// class PrimeFactors {
//     constructor(){
//         this.factors = []
//     }

//     for(num) {
//         if(num === 1) return this.factors
//         let i = 2
//         while (i <= num) {
//             if(num % i === 0) {
//                 console.log(i)
//                 this.factors.push(i)
//             }
//         }
//         return this.factors
//     }
// }

// // const forJasmine = new PrimeFactors()
// // module.exports = forJasmine

// //NODE
// const primeFactors = new PrimeFactors()
// console.log(primeFactors.for(12))