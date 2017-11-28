class Crypto {
    constructor(txt){
        this._txt = txt
        this._normalTxt = this._txt.replace(/[^\w]/g, '').toLowerCase()
        this._normalLen =  this._normalTxt.length
    }
    normalizePlaintext(){
        return this._normalTxt
    }
    size(){
        let c = Math.floor(Math.sqrt(this._normalLen)) 
        if(this._normalLen/c !== c) c += 1
        return c
    }
    plaintextSegments(){
        let c = this.size();
        const segment = [...this._normalTxt].reduce((str, item, idx) => {
            if(item && idx !== 0 && (idx + 1) % c === 0){
                str += item
                str += ' '
            }
            else str += item
            return str
        },'')
        return segment.trim().split(' ')
    }
    ciphertext(){
        let str = ''
        const cipher = this.plaintextSegments()
        let i = 0,  len = cipher[0].length
        for(i; i < len; i++) {
            for(let j = 0; j < cipher.length; j++) {
                if(cipher[j][i]) str += cipher[j][i]
            }      
        } 
        return str
    }
}

module.exports = Crypto

