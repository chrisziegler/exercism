
class PhoneNumber {
    constructor(input) {
        this.input = input
    }
    number() {
        let nn = this.input
        .replace(/[\s\(\)-\.]/g, "")
        if(nn.length < 10 || nn.length > 11) return '0000000000'

        else if(nn.length ===11 && nn[0] === '1') {
            return nn.slice(1, nn.length);
        } 
        else if(nn.length ===11 && nn[0] !== '1') {
            return '0000000000'
        } else {     
       return nn
        }
    }
    areaCode() {
        let ac = this.input
        .replace(/[\s\(\)-\.]/g, "")
        .substr(0, 3)
        return ac
    }
    toString() {
        let ts = this.input.replace(/[\s\(\)-\.]/g, "")
        //ac, ec, & sn refer to the 1st, 2nd, & 3rd capture groups in RegExp
        const replacer = (str, ac, ec, sn) => `(${ac}) ${ec}-${sn}`
        const result = ts.replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, replacer) 
        return result
    }
}
module.exports = PhoneNumber


//TEST IN NODE HERE 
const phone = new PhoneNumber('1234567890')

console.log(phone.areaCode());
console.log(phone.toString());

