
class SecretHandshake{
    constructor(num) {
        this.num = num
    }

    commands() {
        let shake = [];
        if (this.num & 1) { shake.push("wink") }
        if (this.num & 2) { shake.push("double wink") }
        if (this.num & 4) { shake.push("close your eyes") }
        if (this.num & 8) { shake.push("jump") }
        if (this.num & 16) { shake.reverse() }
        return shake
    }
    test() {
        return this.num
    }
}

module.exports = SecretHandshake
let handshake = new SecretHandshake(19)
console.log(handshake.commands())



// SecretHandshake.prototype.handshake = function(num) {
//     var commands = []
//     if (num & 1) { commands.push("wink") }
//     if (num & 2) { commands.push("double wink") }
//     if (num & 4) { commands.push("close your eyes") }
//     if (num & 8) { commands.push("jump") }
//     if (num & 16) { commands.reverse() }
//     return commands
//   };
  
//   module.exports = SecretHandshake;