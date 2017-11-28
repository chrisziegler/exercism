class List {
    constructor(numArr = []){
        this.numStr = numArr.toString()
    }
    compare(listTwo){
        const aStr = this.numStr
        const bStr = listTwo.numStr
        const result = ((a, b) => {
            let check = a === b ?  'EQUAL' :
            b.includes(a) ? 'SUBLIST' :
            a.includes(b) ?  'SUPERLIST' : 
            a !== b ? 'UNEQUAL' : 0
            return check
        })
        return result(aStr, bStr)
    }
}

module.exports = List


