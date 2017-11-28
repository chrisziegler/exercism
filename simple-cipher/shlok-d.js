const possible = "abcdefghijklmnopqrstuvwxyz";

class Cipher {
  constructor(key) {
    this.key = '';
    this.validateAndSetKey(key)
  }

  validateAndSetKey(key) {
    if(key === undefined) {
      this.key = this.generateRandomKey();
    } else if (/^[a-z]+$/.test(key)) {
      this.key = key;
    } else {
      throw new Error("Bad key");
    }
  }

  generateRandomKey() {
    let randomKey = '';
    for(let i = 0; i<=100; ++i) {
      randomKey += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomKey;
  }

  getShift(index) {
    return possible.indexOf(this.key.charAt(index));
  }

  encode(text) {
    let encodedString = "";
    for(let i = 0; i < text.length; ++i) {
      let character = text.charCodeAt(i);
      let shift = this.getShift(i);
      encodedString += String.fromCharCode((character - 97 + shift) % 26 + 97);
    }
    return encodedString;
  }

  decode(text) {
    let decodedString = "";
    for(let i = 0; i < text.length; ++i) {
      let character = text.charCodeAt(i);
      let shift = this.getShift(i);
      decodedString += String.fromCharCode((character - 97 - shift + 26) % 26 + 97);
    }
    return decodedString;
  }
}

module.exports = Cipher;