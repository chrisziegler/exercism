//CLEAN ITERATION 1
const Triangle = function(...args) {
   [...this.args] = args
}

Triangle.prototype.kind = function(){
    let [a, b, c] = this.args

    if(a <= 0 || b <= 0 || c <= 0 )  {
        throw new this.err()
    }
    else if(a + b < c || b + c < a || c + a < b){
        throw new this.err2()
    }
    else if(a === b && b === c) return 'equilateral'
    else if((a === b && a !== c) ||
       (b === c && b !== a) ||
       (a === c && a !== b)) {
        return 'isosceles'
     }
    else if(a !== b && b !== c && c !== a) return 'scalene'
}
Triangle.prototype.err = function(){
    this.message = 'test triangles with no size, or negative sides are illegal'
    this.toString = () => `${this.message}`
}
Triangle.prototype.err2 = function(){
    this.message = 'triangles violating triangle inequality are illegal'
    this.toString = () => `${this.message}`
}

module.exports = Triangle

//ES6 CLASS VERSION WITH CRAZY ASS REST PARAMS, DESTRUCTURING, SETS, & A MATH.SIGN FUNCTION
// module.exports = class Triangle {
//     constructor(...args){
//        [...this.args] = args 
//     }
//     kind(){
//         let [...args] = this.args

//         let triangleTyper = (...args) => {
//             let[a, b, c] = args
//             if(a + b < c || b + c < a || c + a < b){
//             throw new Error('triangles violating triangle inequality are illegal')
//             }
//             let threeSides = new Set([a, b, c])
//             for(let side of threeSides){
//                 if(Math.sign(side) === 0 || Math.sign(side) === -1) {
//                     throw new Error('test triangles with no size, or negative sides are illegal')
//                 } 
//             }      
//             if (threeSides.size === 3) {
//                     return `scalene`
//                 } else if (threeSides.size === 2) {
//                     return `isosceles`
//                 } else if (threeSides.size === 1) {
//                     return `equilateral`
//                 }
        
//             }
//         return triangleTyper(...args)
//         }
// }

// const triangle = new Triangle(2, 2, 2)
// console.log(triangle.kind())