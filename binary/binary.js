function Binary(binary) {
    this.toDecimal = function() {
        const numArr = []
        if(/[^01]/.test(binary)) return 0
        
        let i = 0, length = binary.length;
         for(i; i < length; i++) {
            let binNum = +binary[length - i - 1] 
            numArr.push(binNum * Math.pow(2, i))
        }
        return numArr.reduce((sum, item) => sum + item, 0)
    }
}

module.exports = Binary

//NODE
let binary = new Binary('0101')
binary.toDecimal()