class Trinary {
    constructor(num){
        this._num = num
    }
    toDecimal(){
        let n = /[^0-2]/g.test(this._num)
        console.log(n)
        if(n) return 0
        return [...this._num].reverse().map(x => parseInt(x)).reduce((acc, item, idx) => {
            return acc + (item * Math.pow(3, idx))
        }, 0)

    }
}

module.exports = Trinary.js

const trinary2 = new Trinary('200122')

//NODE
console.log(trinary2.toDecimal())
