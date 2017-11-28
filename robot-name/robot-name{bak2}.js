//PASSING ALL 6 TESTS -ROUGH
var namesUsed = {}
class Robot {
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
              
                this.name = name
                namesUsed[this.name] = true
                return this.name
         }

        //     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        //     let rngStr = ""
        //     for (let i = 0; i < 2; i++){
        //         rngStr += letters.charAt(Math.floor(Math.random() * letters.length))
        //     }
        //     const rngNoStr = Math.floor((Math.random() * 999) + 1).toString()
        //     if(rngNoStr.length === 2){
        //         const leadingZero = '0'.concat(rngNoStr)
        //         rngStr += leadingZero
        //     } else if(rngNoStr.length === 1){
        //         const leadingZeroes = '00'.concat(rngNoStr)
        //         rngStr += leadingZeroes
        //     } else {
        //         rngStr += rngNoStr
        //     } 
        //     return rngStr 
        // }
     
        // this.name = this.rng()

           
    

    reset() {
        this.name = this.newName()
    }
}

module.exports = Robot;
// const robot = new Robot()
// console.log(robot.name)

// UNIQUE NAME AFTER RESET TEST RECREATED
// const robot = new Robot()
// var i,
//     numResets = 500,
//     usedNames = {};
//     usedNames[robot.name] = true; //sets usedName key to initial robot name ~                           //'AB123' (here's the tests + 1)

//     for (i = 0; i < numResets; i++) {
//       robot.reset(); //sets this._name to ''
//       //WHEN RUN NOW SHOULD ADD UNIQE NAME TO USEDNAMES OBJ
//       usedNames[robot.name] = true;  //sets usedName keys to ~ 'AB123'
//     }
// // var numOfKeys = Object.keys(usedNames).length
// // console.log(numOfKeys)
// console.log(Object.keys(usedNames).length)





// console.log(Object.keys(usedNames))
    // expect(Object.keys(usedNames).length).toEqual(numResets + 1);




//WORKING TESTS 1-4 ONLY!
// 1) Robot should set a unique name after reset
//   Message:
//     Expected 9921 to equal 10001.
// //WTF Robot!

// class Robot {
//     constructor() {
//         this._name = ''
//         this.usedNames = {}
//     }
    
//     get name() {
//         //PREVENTS RESETING NAME WHEN RUNNING GETTER MORE THAN ONCE W/O RESET
//         if(this._name) {
//             // console.log(this._name)
//             return this._name
//         }
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         let rngStr = ""
//         for (let i = 0; i < 2; i++){
//             rngStr += letters.charAt(Math.floor(Math.random() * letters.length))
//         }
//         rngStr += this.rng() 

//         //New Stuff
//         //IS RNGSTR ORIGINAL?
//         //WE NEED USEDNAMES.LENGTH BEFORE
//         //THEN ADD KEY TO USEDNAMES OBJECT
//         //CHECK USEDNAMES LENGTH
//         //IF SAME RUN NAME GETTER AGAIN
//         //IF DIFFERENT NAME ROBOT - THIS._NAME = RNGSTR
//         //& RETURN IT LIKE 2-UNCOMMENTED LINES BELOW  
//         const unLenBefore = Object.keys(this.usedNames).length
//         // console.log('unLenBefore: ' + unLenBefore)
//         this.usedNames[rngStr] = true
//         const unLenAfter = Object.keys(this.usedNames).length
//         // console.log('unLenAfter: ' + unLenAfter)
//         //OKAY COOL - WERE STORING RNGSTR AS A UNIQUE ONLY KEY IN USEDNAMES

//         //if name produced a unique key, the usedNames Obj just increased in size
//         if(unLenAfter !== unLenBefore) {
//             this._name = rngStr
//             return this._name
//         } else {
//             //OKAY, FIGURED OUT WHAT IS GOING ON, THIS ENSURES UNIQUE NAMES
//             //JUST NOT 1 for every interation, since it iterates another call to
//             // the getter each time it fails, rather than solving the problem here
//             //inside the method.
//             //robot has just been reset, no this._name at this point
//             // console.log('rngStr: ' +rngStr+ ' has been used before. unLenBefore ' + unLenBefore+ '\n'+ 
//             // 'should be same length as unLenAfter: ' + unLenAfter + ' since nothing was added to usedNames Object')
//             // //get this to run
//              return robot.name
//         }

//         //Old Stuff
//         // this._name = rngStr
//         // return this._name
//     }

//     rng(){
//         const rngNo = Math.floor((Math.random() * 999) + 1)
//         const rngNoStr = rngNo.toString()
//         if(rngNoStr.length === 2){
//             const leadingZero = '0'.concat(rngNoStr)
//             return leadingZero
//         } else if(rngNoStr.length === 1){
//             const leadingZeroes = '00'.concat(rngNoStr)
//             return leadingZeroes
//         } else {
//             return rngNoStr
//         }  
//     }

//     reset() {
//         //STORE THIS._NAME BEFORE WRITING OVER IT WITH EMPTY STRING
//         //ACTUALLY NEXT 2-LINES NOT NECESSARY AS AUTOMATICALLY STORING
//         //NAMES IN OLDNAMES ON NAME GETTER
//         // currentName = this._name
//         // this.oldNames[currentName] = true
//         this._name = ''
//     }
// }

// module.exports = Robot;
// // const robot = new Robot()
// // robot.name

// // UNIQUE NAME AFTER RESET TEST RECREATED
// const robot = new Robot()
// var i,
//     numResets = 5000,
//     usedNames = {};
//     usedNames[robot.name] = true; //sets usedName key to initial robot name ~                           //'AB123' (here's the tests + 1)

//     for (i = 0; i < numResets; i++) {
//       robot.reset(); //sets this._name to ''
//       //WHEN RUN NOW SHOULD ADD UNIQE NAME TO USEDNAMES OBJ
//       usedNames[robot.name] = true;  //sets usedName keys to ~ 'AB123'
//     }
// // var numOfKeys = Object.keys(usedNames).length
// // console.log(numOfKeys)
// console.log(Object.keys(usedNames).length)





// console.log(Object.keys(usedNames))
    // expect(Object.keys(usedNames).length).toEqual(numResets + 1);

