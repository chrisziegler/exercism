const namesUsed = {}
//See robot-name-1st for cleaner version
module.exports = class Robot {
    constructor() {
        this.name = this.generate()
    }
    
    generate() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const nums = () => (Math.random() + '').substr(2, 3)
        const rng = (str) => str[Math.floor(Math.random() * str.length)]
        const alphaNumeric = () => `${rng(letters)}${rng(letters)}${nums()}`
        let abcNum = alphaNumeric()
        while( namesUsed[abcNum] ) {
            abcNum = alphaNumeric()
        }
        namesUsed[abcNum] = true
        this.name = abcNum
        return this.name
    }

    reset() {
        this.name = this.generate()
    }
}