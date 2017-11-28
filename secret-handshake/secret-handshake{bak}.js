function SecretHandshake(num) {
    if (isNaN(num)) throw new Error('Handshake must be a number');
    this.shakes = ['wink', 'double blink', 'close your eyes', 'jump'];
    this.num = num;
}

SecretHandshake.prototype.commands = function() {
    const toBinary = this.num.toString(2);
    const bin = [...toBinary],
    binRev = [...toBinary].reverse();
    return bin.length === 5 ? this.reverse(bin) : this.standard(binRev);
}

SecretHandshake.prototype.reverse = function(bin) {
    bin.splice(0,1)
    let decode = this.shakes.reverse()
    .reduce((arr, item, idx) => {
        if (bin[idx] === '1') {
            arr.push(item)
        }
        return arr
    },[])
    return decode
}

SecretHandshake.prototype.standard = function(binRev) {
    let decode = this.shakes.reduce((arr, item, idx) => {
        if (binRev[idx] === '1') {
            arr.push(item)
        }
        return arr
    },[])
    return decode 
}

module.exports = SecretHandshake
