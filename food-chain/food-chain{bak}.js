//ALL PASSING!
//PRIOR TO MESSING WITH CHORUS
// if(num > 2 && num < 8) { string += `${num !== 3 ? chorus : chorus.concat('that wriggled and jiggled and tickled inside her.') }` }
class FoodChain  {
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
            const chorus = `She swallowed the ${food[num].a} to catch the ${food[num-1].a}.\n`
            const chorus2 = `She swallowed the ${food[num].a} to catch the ${food[num-1].a} that${food[2].b}`
            if(num === numRef) { string += `${food[0].b} ${food[num].a}.\n` }
            if(num === numRef && num !== 1 && num !== 2) {
                string += `${food[num].b}`
                if(num === 8) {
                    stanza.push(string)
                    break }
            }
            if(num > 2 && num < 8) { string += `${num !== 3 ? chorus : chorus2 }` }
            if(num === 2 && numRef === 2) { string += `It${food[num].b}` }
            if(num === 2) { string += `${chorus}` }
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
module.exports = FoodChain

//NODE TESTS HERE - for getting console.log/etc feedback BOTH STYLES outside main IDE terminal
const song = new FoodChain()
// console.log(song.verse(2));
console.log(song.verses(1, 2))




//PASS TESTS 1- 8 (MINUS VERSES TESTS
// class FoodChain  {
//     constructor() {
//         this.animals = [
//             { a: "old lady", b:'I know an old lady who swallowed a' },
//             { a: "fly", b: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'},
//             { a: "spider", b: ' wriggled and jiggled and tickled inside her.\n' },
//             { a: "bird", b: 'How absurd to swallow a bird!\n' },
//             { a: "cat", b: 'Imagine that, to swallow a cat!\n' },
//             { a: "dog", b: 'What a hog, to swallow a dog!\n' },
//             { a: "goat", b:  'Just opened her throat and swallowed a goat!\n' },
//             { a: "cow", b: 'I don\'t know how she swallowed a cow!\n' },
//             { a: "horse", b: 'She\'s dead, of course!\n' }
//             ];
//     }
//     verse(num) {
//         const food = this.animals
//         const numRef = num
//         const stanza = []
//         let string = ''
//         for( num; num > 0; num--) {
//             const chorus = `She swallowed the ${food[num].a} to catch the ${food[num-1].a}.\n`
//             const chorus2 = `She swallowed the ${food[num].a} to catch the ${food[num-1].a} that${food[2].b}`
//             //first iteration only
//             if(num === numRef) {
//             // I know an old lady who swallowed a {'spider'}.
//             string += `${food[0].b} ${food[num].a}.\n`
//             }
//             if(num === numRef && num !== 1 && num !== 2) {
//                 //'How absurd to swallow a bird!'
//                 string += `${food[num].b}`
//                 if(num === 8) {
//                     stanza.push(string)
//                     break
//                 }
//             }
//             // if(num === 8)  {
//             //     string += `${food[num].b}`
//             //     stanza.push(string)
//             //     break
//             //     // return stanza.join('\n')
//             // }
//             if(num > 2 && num < 8) {
//                 //She wallowed the () to catch the ()
//                 string += `${num !== 3 ? chorus : chorus2 }`
//             }
//             if(num === 2 && numRef === 2) {
//                 //It wriggled and jiggled and tickled inside her.
//                 string += `It${food[num].b}`
//             }
//             if(num === 2) {
//                 //She swallowed the spider to catch the fly.
//                 string += `${chorus}`
//             }
//             if(num === 1) {
//             // I don't know why she swallowed the fly. Perhaps she'll die.
//             string += `${food[1].b}`
//             stanza.push(string)
//             }
//         }  
//         return stanza.join('\n')         
//     }
// }

// module.exports = FoodChain

// //NODE TESTS HERE - for getting console.log/etc feedback BOTH STYLES outside main IDE terminal
// const song = new FoodChain()
// console.log(song.verse(8));



//PASSING FIRST 2 JASMINE TESTS
//Chorus needs to add dynamic behavior variable ${}
//v3 ∴ 'She swallowed the {bird }to catch the{spider} ${that wriggled and jiggled and tickled inside her.}\n' 
// ALL the other chrouses are stright forward w/o behavior
// 'She swallowed the cow to catch the goat.\n' +
//       'She swallowed the goat to catch the dog.\n' +
//       'She swallowed the dog to catch the cat.\n' +
//       'She swallowed the cat to catch the bird.\n' +
//       'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
        //   THEN BACK TO
//       'She swallowed the spider to catch the fly. \n' +
// So maybe a chorus ternary: '   ${(num === 3) ? chorus + bird : chorus }''
// class FoodChain  {
//     constructor() {
//         this.kingdom = [
//             { a: "old lady", b:'I know an old lady who swallowed a' },
//             { a: "fly", b: 'Perhaps she\'ll die.\n'},
//             { a: "spider", b: 'It wriggled and jiggled and tickled inside her.\n' },
//             { a: "bird", b: 'How absurd to swallow a bird!\n' },
//             { a: "cat", b: 'Imagine that, to swallow a cat!\n' },
//             { a: "dog", b: 'What a hog, to swallow a dog!\n' },
//             { a: "goat", b:  'Just opened her throat and swallowed a goat!\n' },
//             { a: "cow", b: 'I don\'t know how she swallowed a cow!\n' },
//             { a: "horse", b: 'She\'s dead, of course!\n\n' }
//             ];
//     }
//     verse(num, end = num) {
//         // sync w-indexing - might not need can skip plus [num+1] in verses
//         // num = num - 1
//         // pull-off props
//         const king = this.kingdom
//         const why = 'I don\'t know why she swallowed the '
//         const chorus = `She swallowed the ${king[num].a} to catch the ${king[num-1].a}.\n${why}${king[num-1].a}. ${king[num-1].b}`
//         const verses = []
//         while (num >= end ) {
//             if(num > 1) {
//                 verses.push(`${king[0].b} ${king[num].a}.\n${king[num].b}${chorus}`)
//             } else {
//                 verses.push(`${king[0].b} ${king[num].a}.\n${why}${king[num].a}. ${king[num].b}`)
//             }
           
//              num--;
//         } 
//         return verses.join('\n')      
//     }
// }

// module.exports = FoodChain



//NODE TESTS HERE - for getting console.log/etc feedback BOTH STYLES outside main IDE terminal
// const song = new FoodChain()
// console.log(song.verse(2));






