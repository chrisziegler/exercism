// const Hamming = function() {};

// Hamming.prototype.compute = function(a, b) {
//     const strandA = a.split('');
//     const strandB = b.split('');
//     let dist = 0;

//     if(strandA.length === strandB.length) {
//             strandA.forEach((strand, index) => {
//                 if(strand !== strandB[index]) {
//                     dist++
//                 }
//             })
//         }else{
//             throw new Error('DNA strands must be of equal length.')
//         }
//     return dist;
// }

//  module.exports = Hamming;

class Hamming {

  compute(x, y) {
    const first = [...x]
    const second = [...y]
    if (first.length !== second.length) {
      throw new Error('DNA strands must be of equal length.')
    } 
    let counter = 0
    first.forEach((nucleotide, index) => {
      if (nucleotide !== second[index]) {
        counter += 1
      }
    })
    return counter 
  }

}

module.exports = Hamming
//run in terminal $node hamming.js
// const specimen1 = new Hamming();
// console.log(specimen1.compute('AGG', 'ATC'));


