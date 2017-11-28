const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const USED_NAME = new Set();

function randomAlphabet(noOfAlphabet){
    var alphabets = "";
    for(var i = 0 ; i< noOfAlphabet;i++){
        alphabets += ALPHABETS[Math.floor(Math.random() * 26 )];
    }
    return alphabets;
}

function randomDigits(noOfDigits){
    var digits = "";
    for(var i = 0; i< noOfDigits; i++){
        digits += Math.floor(Math.random() * 10 );
    }
    return digits;
}

class Robot{
    constructor(){
        this.reset();
    }
    reset(){
        var newName ;
        do{
            newName = randomAlphabet(2)+randomDigits(3);
        }while(USED_NAME.has(newName));
        this.name = newName;
        USED_NAME.add(newName);
    }
}

module.exports = Robot;

const robot = new Robot
console.log(robot.name)
