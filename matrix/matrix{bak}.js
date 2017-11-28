//Submitted as iteration 1
module.exports = class Matrix {
    constructor(input){
        this.generate(input)
    }
    generate(userString){
        const segments = userString.match(/\n/g).length + 1
        const normalArr = userString.replace(/\n/g, ' ').split(' ').map(Number) 
        const inLen = normalArr.length / segments
        this.rows = [], this.columns = []
        let rIndex = 0, cIndex = 0
        for(let i = 0; i < segments; i++){
            this.rows[i] = []
            this.columns[i] = []
            cIndex = i
            for(let j = 0; j < inLen; j++){
                this.rows[i][j] = normalArr[rIndex]
                this.columns[i][j] = normalArr[cIndex]
                rIndex++
                cIndex += segments
            }
        }
        return
    }
}


//PASSIN ALL 3 CLEAN - PRE-refactoring
// module.exports = class Matrix {
//     constructor(input){
//         this.matrix = { rows: this.rows, cols: this.cols}
//         this.generate(input)
//         this.rows = this.matrix.rows
//         this.columns = this.matrix.cols
//     }
//     generate(userString){
//         let segments = userString.match(/\n/g).length + 1
//         let normalArr = userString.replace(/\n/g, ' ').split(' ').map(Number) 
//         let inLen = normalArr.length / segments
//         let rowMatrix = [], colMatrix = []
//         let rIndex = 0, cIndex = 0
     
//         for(let i = 0; i < segments; i++){
//             rowMatrix[i] = []
//             for(let j = 0; j < inLen; j++){
//                 rowMatrix[i][j] = normalArr[rIndex]
//                 rIndex++
//             }
//         }
        
//         for(let i = 0; i < segments; i++){
//             colMatrix[i] = []
//             cIndex = i
//             for(let j = 0; j < inLen; j++){
//                 colMatrix[i][j] = normalArr[cIndex]
//                 cIndex += segments
//             }
//         }

//         this.matrix.cols = colMatrix
//         this.matrix.rows = rowMatrix
//         return this.matrix
//     }
// }


//PASSING ALL 3 WOOT! - uncleaned
// class Matrix {
//     constructor(numStr){
//         this._numStr = numStr
//         this.matrix = { rows: this.rows, cols: this.cols}
//         this.generate(this._numStr)
//         this.rows = this.matrix.rows
//         this.columns = this.matrix.cols
//     }
//     generate(input){

//         let segments = input.match(/\n/g).length + 1
//         let normalArr = input.replace(/\n/g, ' ').split(' ').map(Number) //normalized single array [1, 2, 10, 20]
//         let inLen = normalArr.length / segments
//         // console.log(normalArr)
//         // console.log('segments ' + segments)
//         // console.log('inLen ' + inLen)
//         let rowMatrix = [], colMatrix = []
//         let rIndex = 0, cIndex = 0
//         //rows matrix
//         for(let i = 0; i < segments; i++){
//             rowMatrix[i] = []
//             for(let j = 0; j < inLen; j++){
//                 // console.log('i ' + i + ' j ' + j + ' rIndex ' + rIndex)
//                 rowMatrix[i][j] = normalArr[rIndex]
//                 rIndex++
//             }
//         }
        
      
//         //cols matrix
//         for(let i = 0; i < segments; i++){
//             colMatrix[i] = []
//             cIndex = i
//             for(let j = 0; j < inLen; j++){
//                 // console.log('i ' + i + ' j ' + j + ' cIndex ' + cIndex)
//                 colMatrix[i][j] = normalArr[cIndex]
//                 cIndex += segments
//             }
//         }

       
//         this.matrix.cols = colMatrix
//         this.matrix.rows = rowMatrix
//         // console.log(this.matrix)
//         return this.matrix


//     }

// }

// module.exports = Matrix

//NODE

// console.log(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1])
// console.log(matrix.rows[1])





//passing 1st test woo hoo! added matrix obj to allow single return
//starting to add column functionality
// class Matrix {
//     constructor(numStr){
//         this._numStr = numStr
//         this.matrix = { rows: this.rows, cols: this.cols}
//         this.generate(this._numStr)
//         this.rows = this.matrix.rows
//         // this.columns = this.matrix.cols
//     }
//     generate(input){

//         let segments = input.match(/\n/g).length + 1
//         //.map(Number) is THE way to parseInt an array of number strings to an array of type Numbers
//         let normalArr = input.replace(/\n/g, ' ').split(' ').map(Number) //normalized single array [1, 2, 10, 20]
//         let inLen = normalArr.length / segments
//         console.log(normalArr)
//         console.log('segments ' + segments)
//         console.log('inLen ' + inLen)
//         let rowMatrix = []
//         // let colMatrix = []
//         let index = 0
//         for(let i = 0; i < segments; i++){
//             rowMatrix[i] = []
//             for(let j = 0; j < inLen; j++){
//                 console.log('i ' + i + ' j ' + j + ' index ' + index)
//                 rowMatrix[i][j] = normalArr[index]
//                 index++
//             }
//         }
        
//         this.matrix.rows = rowMatrix
//         // this.matrix.cols = colMatrix
//         console.log(this.rows)
//         return this.matrix


//     }

// }

// module.exports = Matrix

// //NODE

// console.log(new Matrix('1 2\n10 20').rows[0])
// // console.log(matrix.rows[1])