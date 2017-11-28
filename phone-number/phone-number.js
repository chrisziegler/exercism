
module.exports = class PhoneNumber {
    constructor(input) {
        this.num = input.replace(/[\s\(\)-\.]/g, "")
    }

    number() {
        if(this.num.length < 10 || this.num.length > 11) return '0000000000'
        else if(this.num.length ===11 && this.num[0] === '1') {
            return this.num.slice(1, this.num.length) } 
        else if(this.num.length ===11 && this.num[0] !== '1') {
            return '0000000000' }
        else return this.num       
    }

    areaCode() {
        return this.num.substr(0, 3)
    }

    toString() {
        const replacer = (str, ac, ec, sn) => `(${ac}) ${ec}-${sn}`
        return this.num.replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, replacer) 
    }
}