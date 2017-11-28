function atbash(){}

atbash.encode = function(text){
    const plain = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const backwards = 'zyxwvutsrqponmlkjihgfedcba0123456789'
    const formatted = text.replace(/\s+|,|\./g, '').toLowerCase()
    const codify = [...formatted].reduce((arr, ltr, idx) => {
        if (idx % 5 === 0){
            arr.push(' ')
            arr.push(backwards[plain.indexOf(ltr)])
        }
        else arr.push(backwards[plain.indexOf(ltr)])
        return arr
    },[])
 return codify.join('').trim()
}

module.exports = atbash

console.log(atbash.encode('The quick brown fox jumped over the lazy dog'))