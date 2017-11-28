
class Pangram {
    constructor(phrase) {
        this.phrase = phrase
    }

    isPangram() {
        if(!this.phrase) {
            return false;
        }
        const words = this.phrase.toLowerCase()
        const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
        return letters.filter(letter => words.indexOf(letter) === -1 )
        .length === 0; 
    }
}

module.exports = Pangram;

const pangram = new Pangram('The lazy brown fox')
console.log(pangram.isPangram());

