module.exports = class Cipher {
    constructor(key = 'aaaaaaaaaa') {
        this.key = key
        if (!/[a-z]+/.test(this.key)) {
            throw new Error('Bad key')
        }
        this.letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
        this.shift = this.key
            .split('')
            .reduce((arr, ltr) => {
                arr.push(this.letters.indexOf(ltr))
                return arr
            }, [])
    }
    encode(plainText) {
        let encoded = plainText
            .split('')
            .reduce((ptArr, ptLtr, index) => {
                ptArr.push(this.letters.indexOf(ptLtr) + this.shift[index])
                return ptArr
            }, [])
        let encodeStr = ''
        encoded.map(item => encodeStr += this.letters[item])
        return encodeStr
    }
    decode(cipherText) {
         let code = cipherText
            .split('')
            .reduce((codeArr, cLtr, index) => {
                codeArr.push(this.letters.indexOf(cLtr) - this.shift[index])
                return codeArr
            }, [])
        let codeStr = ''
        code.map(item => codeStr += this.letters[item])
        return codeStr
    }
}
