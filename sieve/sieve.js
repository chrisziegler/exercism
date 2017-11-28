module.exports = class Sieve {
    constructor(limit){
        this._limit = limit
        this.primes = this.eratosthenes()
    }
    eratosthenes(){
        let marked = new Set()
        let primesArr = []
        const mark = num => {
            let counter = num
            while (num + counter <= this._limit){
                marked.add(num += counter)
            }
            num = counter
            counter = counter + 1
            if(!marked.has(num)) primesArr.push(num)
            if (counter <= this._limit) mark(counter)
            return primesArr 
        }   
        return mark(2)
    }
}



