function atbash(){}

atbash.encode = function(text){
    const plain = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const backwards = 'zyxwvutsrqponmlkjihgfedcba0123456789'
    const formatted = text.replace(/\s+|,|\./g, '').toLowerCase()
    let i = 0, cipherStr = ''
    while(i < formatted.length){
        let cipherIdx = plain.indexOf(formatted[i])
        cipherStr += backwards[cipherIdx]
        i++
    }
    return atbash.group(cipherStr, 5) 
}

atbash.group = function(str, interval){
    let cipherArr = [...str]
    let cipher = []
    let i = 0, length = cipherArr.length
    for(i; i <= length; i++){
        if(i % interval === 0) {
            cipher.push(cipherArr[i - 1])
            if (i !== 0) cipher.push (' ')
        }
        else cipher.push(cipherArr[i - 1])
    }
    return cipher.join('').trim()
}

module.exports = atbash
//NODE
console.log(atbash.encode('The quick brown fox jumps over the lazy dog.'))
// console.log(atbash.encode('Testing, 1 2 3, testing.'))