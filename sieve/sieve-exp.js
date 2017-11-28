class Sieve {
    constructor(limit){
        this._limit = limit
    }
    primes(){
        let marked = []
        let primesArr = []
        let num = 2
        let counter;
        for(num; num < this._limit; num++){
            counter = num
            if(marked.indexOf(counter) === -1){
                primesArr.push(num)
                while(counter <= this._limit){
                    marked.push(counter += num)
                }
                num++
                console.log(num)
            }
            else num++
                console.log(num)
        }
            return('marked ' + marked + ' primesArr ' + primesArr)
    }
}

module.exports = Sieve

//NODE
console.log(new Sieve(20).primes())

