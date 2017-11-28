//REFACTORED W/ES6 ARGUMENT HANDLING
class Anagram {
    constructor(input) {
        this.input = input
    }

    matches(firstArg, ...args) {
        const words = [].concat(firstArg, args)
        const inputRef = this.input
        const inputArr = [...this.input].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        const anagram = []
        const match = function(word) {
            const wordArr = [...word].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            if (inputRef.toLowerCase() === word.toLowerCase()) return false
            if (wordArr.length !== inputArr.length) return false
            for (let i = 0; i <  wordArr.length; i++) {
                if(wordArr[i].toLowerCase() !== inputArr[i].toLowerCase()) {
                    return false
                }         
            }
            return true  
        }
    
        words.filter(word => {
             if(match(word)) {
                anagram.push(word)
             }   
        })
        return anagram
    }
}
module.exports = Anagram

//TEST ON NODE
const subject = new Anagram('ant')
console.log(subject.matches(['stand', 'tan', 'at']))

//FIRST FINISHED PASSING ITERATION
// class Anagram {
//     constructor(input) {
//         this.input = input
//     }
//     matches(words) {
//         if (typeof words === 'string') {
//             let wordsArr = []
//             for(var i in arguments) {
//                 wordsArr.push(arguments[i])
//             }
//             words = wordsArr
//         }

//         const inputRef = this.input
//         const inputArr = [...this.input].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
//         const anagram = []
//         const match = function(word) {
//             const wordArr = [...word].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
//             if (inputRef.toLowerCase() === word.toLowerCase()) return false
//             if (wordArr.length !== inputArr.length) return false
//             for (let i = 0; i <  wordArr.length; i++) {
//                 if(wordArr[i].toLowerCase() !== inputArr[i].toLowerCase()) {
//                     return false
//                 }         
//             }
//             return true  
//         }
    
//         words.filter(word => {
//              if(match(word)) {
//                 anagram.push(word)
//              }   
//         })
//         return anagram
//     }
// }

// module.exports = Anagram

// //TEST ON NODE
// const subject = new Anagram('ant')
// console.log(subject.matches(['stand', 'tan', 'at']))
// => [ 'gallery', 'regally', 'largely' ]







//Mostly working - except for case insensitivity - learned about localeCompare later
// class Anagram {
//     constructor(input) {
//         this.input = input
//     }
//     matches(words) {
//         let inputArr = [...this.input].sort()
//         const anagram = []
//         const match = function(word) {
//             let wordArr = [...word].sort()
//             if (wordArr.length !== inputArr.length) return false
//             for (let i = 0; i <  wordArr.length; i++) {
//                 if(wordArr[i].toLowerCase() !== inputArr[i].toLowerCase()) {
//                     return false
//                 }         
//             }
//             return true  
//         }
    
//         words.filter(word => {
//              if(match(word)) {
//                 anagram.push(word)
//              }   
//         })
//         return anagram
//     }
// }

// module.exports = Anagram

// //TEST ON NODE
// const subject = new Anagram('allergy')
// console.log(subject.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']))
// => [ 'gallery', 'regally', 'largely' ]






//TEST MODE - THOUGHT THIS WAS COOL

// class Anagram {
//     constructor(input) {
//         this.input = input
//     }
//     matches(words) {
//         let inputWord = this.input
//         let inputArr = [...this.input].sort()
//         console.log(inputArr)

//         const anagram = []
//         const match = function(word) {
//             let wordArr = [...word].sort()
//             console.log(wordArr)
//             wordArr.forEach((abc, i) => {
//                 if(abc !== inputArr[i]) console.log( `test array index: ${abc}, test word index: ${inputArr[i]}, 
// array word: ${word}, test word: ${inputWord}, fail index: ${[i]},`)
//            })
//         }
    
//         words.filter(word => {
//              if(match(word)) {
//                 anagram.push(word)
//              }   
//         })
//         return anagram
//     }
// }
// module.exports = Anagram

// const subject = new Anagram('galea')
// console.log(subject.matches(['eagle']))
// TEST OUTPUT 
// λ node anagram{bak}.js
// [ 'a', 'a', 'e', 'g', 'l' ]
// [ 'a', 'e', 'e', 'g', 'l' ]
// test array index: e, test word index: a,
// array word: eagle, test word: galea, fail index: 1,
// []





//FAILED ON SAME LETTERS DIFFERENT NUMBER OF OCCURENCES TEST - GALEA EAGLE
// class Anagram {
//     constructor(input) {
//         this.input = input
//     }
//     matches(words) {
//         let gram = this.input
//         const anagram = []
//         const match = function(word) {
//             for (let i = 0; i < word.length; i++) {
//                 if(word.indexOf(gram[i]) === -1) break
//             } return true
//         }
//         words.filter(word => {
//              if(word.length === gram.length && match(word)) {
//                 anagram.push(word)
//              }   
//         })
//         return anagram
//     }
// }

// module.exports = Anagram

