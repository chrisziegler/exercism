module.exports = class Trinary {
    constructor(num){
        this._num = num
    }
    toDecimal(){
        let n = /[^0-2]/g.test(this._num)
        if(n) return 0
        return [...this._num].reverse()
            .map(x => parseInt(x))
            .reduce((acc, item, idx) => {
                return acc + (item * Math.pow(3, idx))
        }, 0)
    }
}

