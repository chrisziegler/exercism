class Anagram {
    constructor(prop) {
        this.prop = prop
    }

    matches(firstArg, ...args) {
        const words = [].concat(firstArg, args)
        console.log(words)
        const propLwr = this.prop.toLowerCase() 
        const propSort = [...propLwr].sort().join('') 
    
       return words.filter(word => {
            const wordLwr = word.toLowerCase()
            const wordSort = [...wordLwr].sort().join('') 
            return wordSort === propSort && wordLwr !== propLwr   
        })
    }
}

module.exports = Anagram

var subject = new Anagram('ant');
var matches = subject.matches(['tan', 'stand', 'at']);
console.log(matches)