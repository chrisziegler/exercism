//See chadK.js for map(with iterartor) to avoid for loop 
//for this and binary.js (similiar conversion)

function Octal(octalStr) {
    this.octal = octalStr  
}

Octal.prototype.toDecimal = function () {
    if(/[^0-7]+/.test(this.octal)) return 0
    const numArr = []
    let i = 0, len = this.octal.length;
    for (i; i < len; i++) {
        let octNum = +this.octal[len - i - 1]
        numArr.push(octNum * Math.pow(8, i))
    }
    return numArr.reduce((sum, num) => sum + num, 0)
}

module.exports = Octal

