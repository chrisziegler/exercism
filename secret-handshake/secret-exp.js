const HANDSHAKES = [
    [1,"wink"],
    [2,"double blink"],
    [4,"close your eyes"],
    [8,"jump"]
];

class SecretHandshake{
    constructor(num){
        if(isNaN(num)){
            throw new Error('Handshake must be a number')
        }
        this.num = num
    }

    commands(){
        let results = []
        for(let handshake of HANDSHAKES){
            if(handshake[0] & this.num){
                results.push(handshake[1])
            }
        }   
        if(this.num & 16){
            results.reverse()
        }
        return results;
    }
}

module.exports = SecretHandshake;
var handshake = new SecretHandshake(19)
console.log(handshake.commands())