function Binary(binary) {
    this.toDecimal = function() {
        var numArr = []
        let i = 0, length = binary.length;
         for(i; i < length; i++) {
            let binNum = +binary[length - i - 1] //convert to number type for calculation
            // console.log(binNum, ' ', typeof binNum)
            numArr.push(binNum * Math.pow(2, i))
            // console.log(numArr[i])
        }
        //for some reason I kept wanting to write the statement:
        //    return numArr.reduce = ((sum, item) => sum + item, 0)
        return numArr.reduce((sum, item) => sum + item, 0)
        // let total =  numArr.reduce(function(sum, item){
        //     return sum + item
        // })
        
    }
}

module.exports = Binary


// //NODE
// let result = new Binary('10000').toDecimal()
// console.log(result)


// var Binary = require('./binary'); 

// describe('binary', function() {
//   it('0 is decimal 0', function() {
//     expect(new Binary('0').toDecimal()).toEqual(0);
//   });


//PASSING ALL TESTS 1st ITERATION
// module.exports = function Binary(binary) {
//     this.toDecimal = function() {
//         const numArr = []
//         if(/[^01]/.test(binary)) return 0
        
//         let i = 0, length = binary.length;
//          for(i; i < length; i++) {
//             let binNum = +binary[length - i - 1] 
//             numArr.push(binNum * Math.pow(2, i))
//         }
//         return numArr.reduce((sum, item) => sum + item, 0)
//     }
// }

//PASSING ALL TESTS CLASS REFACTOR
// module.exports = class Binary {
//     constructor(binary) {
//         this._binary = binary
//     }
//     toDecimal() {
//         const numArr = []
//         if(/[^01]/.test(this._binary)) return 0
        
//         let i = 0, length = this._binary.length;
//          for(i; i < length; i++) {
//             let binNum = +this._binary[length - i - 1] 
//             numArr.push(binNum * Math.pow(2, i))
//         }
//         return numArr.reduce((sum, item) => sum + item, 0)
//     }
// }