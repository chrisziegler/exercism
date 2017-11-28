class PrimeFactors {
    for(num) {
        this.quot = num
        this.allPrimeFactors = []

        if(num === 1) return this.allPrimeFactors
        let i = 2 
        while(i <= this.quot) {
            if(this.quot % i === 0) this.optimusPrime(i) 
            i++
            }
        return this.allPrimeFactors
    }
    
    optimusPrime(it){
        if(this.quot % it === 0) this.quot /= it 
        else return
        this.allPrimeFactors.push(it) 
        this.optimusPrime(it)
        return
    }
}
       
const forJasmine = new PrimeFactors()
module.exports = forJasmine
