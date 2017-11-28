
//CLEANEST VERSION
const namesUsed = {}
module.exports = class Robot {
    constructor() {
        this.name = this.newName()  
    }
   
    newName() { 
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
            const digits = '0123456789';
            let random = function(val) { return val[Math.floor(Math.random() * val.length)]; }
            let createName = function() { return random(letters) + random(letters) + random(digits) + random(digits) + random(digits); }
            let name = createName();          
             while(namesUsed[name]) {
                name = createName()
            } 
            namesUsed[name] = true
            this.name = name
            return this.name
            }
       
    reset() {
        this.name = this.newName()
    }
}


// UNIQUE NAME AFTER RESET TEST RECREATED
const robot = new Robot()
var i,
    numResets = 10000,
    usedNames = {};
    usedNames[robot.name] = true; //sets usedName key to initial robot name ~                           //'AB123' (here's the tests + 1)

    for (i = 0; i < numResets; i++) {
      robot.reset(); //sets this._name to ''
      //WHEN RUN NOW SHOULD ADD UNIQE NAME TO USEDNAMES OBJ
      usedNames[robot.name] = true;  //sets usedName keys to ~ 'AB123'
    }
// var numOfKeys = Object.keys(usedNames).length
// console.log(numOfKeys)
console.log(Object.keys(usedNames).length)

//MY DIRTY BACKUP VERSION
// const namesUsed = {}
// module.exports = class Robot {
//     constructor() {
//         this.name = this.generate()
//     }
    
//     generate() {
//         const nums = '0123456789'
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         const rng = (value) => Math.floor(Math.random() * value.length)
//         const alphaNumeric = () => `${letters[rng(letters)]}${letters[rng(letters)]}${nums[rng(nums)]}${nums[rng(nums)]}${nums[rng(nums)]}`
//         let abcNum = alphaNumeric()
//         while( namesUsed[abcNum] ) {
//             abcNum = alphaNumeric()
//         }
//         namesUsed[abcNum] = true
//         this.name = abcNum
//         return this.name
//     }

//     reset() {
//         this.name = this.generate()
//     }
// }