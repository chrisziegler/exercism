module.exports = class SecretHandshake{
    constructor(num) {
        if (isNaN(num)) throw new Error('Handshake must be a number');
        this.num = num
    }

    commands() {
        let shake = [];
        if (this.num & 1) { shake.push("wink") }
        if (this.num & 2) { shake.push("double blink") }
        if (this.num & 4) { shake.push("close your eyes") }
        if (this.num & 8) { shake.push("jump") }
        if (this.num & 16) { shake.reverse() }
        return shake
    }
}


