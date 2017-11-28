module.exports = class ETL {
    transform(oldObj){
            const newObj = {}
            Object.keys(oldObj).forEach( key => {
                oldObj[key].forEach( item => {
                    return newObj[item.toLowerCase()] = parseInt(key, 10)
                })   
            })
       return newObj       
    }
}

//1st iteration - notice the arr->string-lwr case -> arr transformation can just 
//be handled after each item in the array is iterated over
// module.exports = class ETL {
//     transform(oldObj){
//             const newObj = {}
//             Object.keys(oldObj).forEach( key => {
//                 oldObj[key].join(',').toLowerCase().split(',').forEach( item => {
//                     return newObj[item] = parseInt(key, 10)
//                 })   
//             })
//        return newObj       
//     }
// }


// module.exports = ETL

// //Node
// const etl = new ETL()
//     var old = {
//       1: [ 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
//       2: [ 'D', 'G' ],
//       3: [ 'B', 'C', 'M', 'P' ],
//       4: [ 'F', 'H', 'V', 'W', 'Y' ],
//       5: [ 'K' ],
//       8: [ 'J', 'X' ],
//       10: [ 'Q', 'Z' ]
//     }
// console.log(etl.transform(old))


// var ETL = require('./etl');

// describe('Transform', function() {
//   var etl = new ETL();

//   it('transforms one value', function() {
//     var old = { 1: ['A'] };
//     var expected = { a: 1 };

//     expect(etl.transform(old)).toEqual(expected);
//   });

//   xit('transforms more values', function() {
//     var old = { 1: ['A', 'E', 'I', 'O', 'U'] };
//     var expected = { a: 1, e: 1, i: 1, o: 1, u: 1 };

//     expect(etl.transform(old)).toEqual(expected);
//   });