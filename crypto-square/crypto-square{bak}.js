//WORKING ALL TESTS ROUGH
class Crypto {
    constructor(txt){
        this._txt = txt
        this._normalTxt = this._txt.replace(/[^\w]/g, '').toLowerCase()
        this._normalLen =  this._normalTxt.length
        this.c
    }
    normalizePlaintext(){
        return this._normalTxt
    }
    size(){
        let c = Math.floor(Math.sqrt(this._normalLen)) 
        let r = c
        if(this._normalLen/c !== c) c += 1
        return c
    }
    plaintextSegments(){
        let c = this.size();
        this._c = c
        let segment = [...this._normalTxt].reduce((str, item, idx) => {
            if(item && idx !== 0 && (idx + 1) % c === 0){
                str += item
                str += ' '
            }
            else str += item
            return str
        },'')
        let segArr = segment.trim().split(' ')
        return segArr
    }
    ciphertext(){
        let str = ''
        let cipher = this.plaintextSegments()


    //     cipher[0][0]  first col is cipher[0].length
    //    1 0              2nd col is cipher.length
    //    2 0
    //    3 0
    //    4 0
    //    5 0
    //    6 0

    //    0 1
    //    1 1
    //    2 1
    //    3 1
    //    4 1
    //    5 1
    //    6 1

    //    0 2
    //    1 2
    //    2 2
        let i = 0,  r = cipher[0].length
        // console.log(cipher[0].length)
        for(i; i < r; i++) {
            //THIS WAS THE KEY HERE, J WOULD INCREMENT UP TO CIPHER LENGTH
            //AND ITS CONDITIONAL WOULD NOT BE TRUE AFTER FIRST ITERATION
            //CONSOLE LOGGED BOTH I AND J TO FIGURE OUT
            //HAD TO RESET J IN THE OUTER LOOP
            //WOULDN"T HAVE HAD THIS PROBLEM IF I HAD JUST WRITTEN IT
            //for(let j = 0; j < cipher.length; j++)
            let j = 0
            // console.log('i ' + i)
            for(j; j < cipher.length; j++) {
                if(cipher[j][i]) str += cipher[j][i]
                // console.log('j ' +  j)
            }      
        } 
        return str

    }
}

module.exports = Crypto

//NODE
// let crypto = new Crypto('123456789abc')
let crypto = new Crypto('Time is an illusion. Lunchtime doubly so.')
// console.log(crypto.normalizePlaintext())
// console.log(crypto.size())
// console.log(crypto.plaintextSegments())
console.log(crypto.ciphertext())


//working 4 tests - added normalize functions to this context in constructor

// class Crypto {
//     constructor(txt){
//         this._txt = txt
//         this._normalTxt = this._txt.replace(/[^\w]/g, '').toLowerCase()
//         this._normalLen =  this._normalTxt.length
//     }
//     normalizePlaintext(){
        
//         // let normalTxt = this._txt.replace(/[^\w]/g, '').toLowerCase()

//         return this._normalTxt
//     }
//     size(){
//         // let normalLen = this.normalizePlaintext(this._txt).length
//         let c = Math.floor(Math.sqrt(this._normalLen)) 
//         let r = c
//         if(this._normalLen/c !== c) c += 1
//         // return(normalLen + ' ' + c + ' ' + r)
//         return c
      
//     }
//     plaintextSegments(){

//     }
// }

// module.exports = Crypto

// //NODE
// let crypto = new Crypto('123456789abc')
// // console.log(crypto.normalizePlaintext())
// console.log(crypto.size())