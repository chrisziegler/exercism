//PASSING ALL 15 TESTS
class Words {
    count(phrase){
        // .,\/#!$%\^&\*;:{}=\-_`~()
        var reg = phrase.match(/[\.\\,:¡¿?!\&@$%^]/g)
        console.log(reg)
        phrase = phrase.toLowerCase().replace(/[\.\\,:¡¿?!\&@$%\^]/g," ")
        console.log(phrase)
        phrase = phrase.replace(/\s{2,}/g," ").replace(/\s$/, '').replace(/^\s/, '')
        phrase = phrase.replace(/([\s'])(['\s])/g, ' ').replace(/\n|\t/g, ' ') //.replace(/\t/g, ' ')
        console.log(phrase)
        const wordArr = phrase.split(' ') // original phrase converted to Array for length
        const uniqueWords = new Set(wordArr)
        let returnObj = {}
        let num = 0
        for(let word of uniqueWords){
            returnObj[word] = num
        }
        
        let i = 0, length = wordArr.length;
        for(i; i < length; i++){
            // console.log(wordArr[i])
            if(uniqueWords.has(wordArr[i])) {
                returnObj[wordArr[i]]++
            }
        }
        // console.log(wordArr.length)
        // console.log(uniqueWords.size)
        // Object.keys(returnObj).forEach(prop => console.log( prop+':', returnObj[prop]))
        // console.log(typeof returnObj)
        return returnObj
    }
}

module.exports = Words

//Node
const words = new Words()
console.log(words.count('¡Hola! ¿Qué tal? Привет!'))
