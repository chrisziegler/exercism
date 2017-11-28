/* THIS passes all but the last massive number test.  In attempting a more pure 
recursive function I seem to run into Maximum call stack size exceeded errors, 
despite having a base condition that is being met. This is probably due to having 
to recursively call to 894119 (largest prime factor) for the 93819012551 case. 
Apparently too damn recursive! Interesting. */

class PrimeFactors {
    constructor() { this.i, this.allPrimeFactors }
    for(num) {
        this.allPrimeFactors = []
        this.i = 2
        if(num === 1) return this.allPrimeFactors
        return this.optimusPrime(num)    
    }
    optimusPrime(num){
        if(this.i <= num){  //next time through 3 < 5 ok ||||| 5 <= 5 ok
            while(num % this.i === 0)  { //next time through - NOPE ||||| 5 % 5 === 0 ok
                num /= this.i  //num = 5 this.i = 3  ||||| NUM = 1
                this.allPrimeFactors.push(this.i) // [2, 2, 3...]  ||||| [2,2,3,5] perfect stahp!
            }
            this.i++ // do this instead this.i = 4 ||| next time this.i = 5
            console.log(this.i)
            this.optimusPrime(num) // this.for(5) again  ||| this.for(5) again
        } else {
            //!return this.allPrimeFactors
            return // apparently return only escapes one level of block scope
        }

        return this.allPrimeFactors
        }     
    }
      
       
const forJasmine = new PrimeFactors()
module.exports = forJasmine

const primeFactors = new PrimeFactors()
console.log(primeFactors.for(901255)) 

