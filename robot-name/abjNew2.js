
//Yes you NEED to keep this set - or as in my previous efforts the Object holding
//the usedNames OUTSIDE the class instance. Think about it. In the final  (failing)
//Jasmine test atleast you need to compare different robots names in a meta list anyways
// If we use this class module syntax we can't put the new set property inside our cURN
//function, or it creates a new set every time, and if we put it in the constructor it
//COUNTS AS AN ITERATION EACH TIME it's run - same as my effort. It needs to be outside 
//the function scope like declaring a sum value outside a loop.

const namesInUse = new Set();

class Robot{
    constructor(){
//after this function has been called once
//this.name = the value returned by createUniqueRandomName()
//is apparently the same as saying 
//THIS.NAME = NAME
//so test 2 (recreated below) passes as it just keeps looking
//up this new property on our robot instance - robot.name
//the reset method simply sets this.name back to equaling calling the cURN() function
        this.name = this.createUniqueRandomName();
    }
    reset() {
         this.name = this.createUniqueRandomName();
    }
    createUniqueRandomName() {
        
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
        const digits = '0123456789';
        let random = function(val) { return val[Math.floor(Math.random() * val.length)]; }
        let createName = function() { return random(letters) + random(letters) + random(digits) + random(digits) + random(digits); }
        let name = createName();
        while (namesInUse.has(name)) {
            name = createName();
        }
        namesInUse.add(name);
        return name;
    }
    
}




module.exports = Robot;
const robot = new Robot()
console.log(robot.name)