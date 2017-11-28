// use module.exports = class Isogram if only need to run as a module
// e.g. in Jasmine. Node cannot use this named export syntax in this manner
class Isogram { 
    constructor(word) {
        this.word = word;
    }

    isIsogram() {
        const word = this.word
        .replace(/[\s-]/g, "")
        .toLowerCase();
        const set = new Set([...word]);
        return set.size === word.length;
    }
}

module.exports = Isogram;

const word = new Isogram('Alphabet')
console.log(word.isIsogram());



// //ORIGINAL SOLUTION USING REGEXP

// class Isogram {
//     constructor(word) {
//         this.word = word
//     }
//     isIsogram() {
//         let w = this.word.replace(/-|\s/g, "").toLowerCase()
//         w = w.replace(/é/g, "e") // eat shit éléphant
//         const hasDuplicates = /(\w).*\1/
//         const matches = w.match(hasDuplicates)
//         if(!matches) return true
//         else return false;
//     }
// }

// module.exports = Isogram

// const word = new Isogram('Alphabet')
// console.log(word.isIsogram());