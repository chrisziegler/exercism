//...IF YOUR PROBLEM REQUIRES REGEXP, THEN YOU HAVE 2 PROBLEMS
module.exports = class Words {
    count(phrase){
        phrase = phrase.toLowerCase().replace(/[\.\\,:¡¿?!\&@$%\^]/g," ")
        phrase = phrase.replace(/\s{2,}/g," ").replace(/\s$/, '').replace(/^\s/, '')
        phrase = phrase.replace(/([\s'])(['\s])/g, ' ').replace(/\n|\t/g, ' ')
        const wordArr = phrase.split(' ') 
        const uniqueWords = new Set(wordArr)
        let returnObj = {}
        let num = 0
        for(let word of uniqueWords){
            returnObj[word] = num
        }
        let i = 0, length = wordArr.length;
        for(i; i < length; i++){
            if(uniqueWords.has(wordArr[i])) {
                returnObj[wordArr[i]]++
            }
        }
        return returnObj
    }
}
