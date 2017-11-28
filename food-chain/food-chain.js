module.exports = class FoodChain  {
    constructor() {
        this.animals = [
            { a: "old lady", b:'I know an old lady who swallowed a' },
            { a: "fly", b: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'},
            { a: "spider", b: ' wriggled and jiggled and tickled inside her.\n' },
            { a: "bird", b: 'How absurd to swallow a bird!\n' },
            { a: "cat", b: 'Imagine that, to swallow a cat!\n' },
            { a: "dog", b: 'What a hog, to swallow a dog!\n' },
            { a: "goat", b:  'Just opened her throat and swallowed a goat!\n' },
            { a: "cow", b: 'I don\'t know how she swallowed a cow!\n' },
            { a: "horse", b: 'She\'s dead, of course!\n' }
            ];
    }
    verse(num) {
        const food = this.animals
        const numRef = num
        const stanza = []
        let string = ''
        for( num; num > 0; num--) {
            const chorus = `She swallowed the ${food[num].a} to catch the ${food[num-1].a}`       
            if(num === numRef) { string += `${food[0].b} ${food[num].a}.\n` }
            if(num === numRef && num !== 1 && num !== 2) {
                string += `${food[num].b}`
                if(num === 8) {
                    stanza.push(string)
                    break }
            }
            if(num > 2 && num < 8) { string += `${num !== 3 ? chorus.concat('.\n') : chorus.concat(' that' + food[2].b) }` }
            if(num === 2 && numRef === 2) { string += `It${food[num].b}` }
            if(num === 2) { string += `${chorus}.\n` }
            if(num === 1) {
            string += `${food[1].b}`
            stanza.push(string)
            }
        }  
        return stanza.join('\n')         
    }
    verses(start, end) {
        const multiVerse = []
        let string = ''
        for(let i = start; i <= end; i++) {
            string += this.verse(i) + '\n'
        }
        multiVerse.push(string)
        return multiVerse.join('\n')
    }
}
