//WORKING TESTS 1-5---- ON NODE Only!!!
// Okay, I got it working in my node test (see {bak} file for an archive of this 
// heroic effort, but the way Jasmine runs it creates its own usedNames Object to 
// hold the names in, so somehow bypasses the logic I used in comparing the before 
// and after lengths….FUCK, okay it's cool that's the only way I could test solutions 
// on my end to get it to work using my script. I know how to rewrite the Jasmine test 
// to get it to work, which was basically how I figured it out. But my way seems slow 
// anyways - "n" must be exponential here in Big-O notation. Time to look at some other solutions.
//WORKING TESTS 1-4 ONLY!
// 1) Robot should set a unique name after reset
//   Message:
//     Expected 9921 to equal 10001.
//WTF Robot!

class Robot {
    constructor() {
        this._name = ''
        this.usedNames = {}
    }
    
    get name() {
        //PREVENTS RESETING NAME WHEN RUNNING GETTER MORE THAN ONCE W/O RESET
        if(this._name) {
            // console.log(this._name)
            return this._name
        }
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let rngStr = ""
        for (let i = 0; i < 2; i++){
            rngStr += letters.charAt(Math.floor(Math.random() * letters.length))
        }
        rngStr += this.rng() 
        //New Stuff
        //IS RNGSTR ORIGINAL?
        //WE NEED USEDNAMES.LENGTH BEFORE
        //THEN ADD KEY TO USEDNAMES OBJECT
        //CHECK USEDNAMES LENGTH
        //IF SAME RUN NAME GETTER AGAIN
        //IF DIFFERENT NAME ROBOT - THIS._NAME = RNGSTR
        //& RETURN IT LIKE 2-UNCOMMENTED LINES BELOW  
        const unLenBefore = Object.keys(this.usedNames).length
        // console.log('unLenBefore: ' + unLenBefore)
        this.usedNames[rngStr] = true
        const unLenAfter = Object.keys(this.usedNames).length
        // console.log('unLenAfter: ' + unLenAfter)
        //OKAY COOL - WERE STORING RNGSTR AS A UNIQUE ONLY KEY IN USEDNAMES

        //if name produced a unique key, the usedNames Obj just increased in size
        if(unLenAfter !== unLenBefore) {
            this._name = rngStr
            return this._name
        } else {
            //robot has just been reset, no this._name at this point
            // console.log('rngStr: ' +rngStr+ ' has been used before. unLenBefore ' + unLenBefore+ '\n'+ 
            // 'should be same length as unLenAfter: ' + unLenAfter + ' since nothing was added to usedNames Object')
            // //get this to run -okay can call getter from within itself like this:
             return robot.name
        }
    }

    rng(){
        const rngNo = Math.floor((Math.random() * 999) + 1)
        const rngNoStr = rngNo.toString()
        if(rngNoStr.length === 2){
            const leadingZero = '0'.concat(rngNoStr)
            return leadingZero
        } else if(rngNoStr.length === 1){
            const leadingZeroes = '00'.concat(rngNoStr)
            return leadingZeroes
        } else {
            return rngNoStr
        }  
    }

    reset() {
        //STORE THIS._NAME BEFORE WRITING OVER IT WITH EMPTY STRING
        //ACTUALLY NEXT 2-LINES NOT NECESSARY AS AUTOMATICALLY STORING
        //NAMES IN OLDNAMES ON NAME GETTER
        // currentName = this._name
        // this.oldNames[currentName] = true
        this._name = ''
    }
}
module.exports = Robot;
// const robot = new Robot()
// robot.name

// UNIQUE NAME AFTER RESET TEST RECREATED
const robot = new Robot()
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





//WORKING TEST 1 - 4 WITH 999 RANGE RNGNO
// class Robot {
//     constructor() {
//         //initializa the name property as an empty string
//         this._name = ''
//     }
//     get name() {
//         //if true - name property has been created with rng
//         if(this._name) {
//             return this._name
//         }
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         let rngStr = ""
//         for (let i = 0; i < 2; i++){
//             rngStr += letters.charAt(Math.floor(Math.random() * letters.length))
//         }
//         //this probably needs a whole function
//         // const rngNo = Math.floor((Math.random() * 900) + 100)

//         rngStr += this.rng() 
//         // set our intialization property to the RNG
//         this._name = rngStr
//         return this._name
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
//         this._name = ''
//     }
// }

// module.exports = Robot;
// //NODE
// const robot = new Robot()
// console.log(robot.name)
// robot.reset()
// const differentRobot = new Robot()
// console.log(differentRobot.name)

//WORKING TEST 1 - 4 WITH 899 RANGE RNGNO
// class Robot {
//     constructor() {
//         //initializes the name property as an empty string
//         this._name = '';
//     }
//     get name() {
//         //if true - name property has been created with rng
//         if(this._name) {
//             return this._name
//         }
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         let rngStr = ""
//         for (let i = 0; i < 2; i++){
//             rngStr += letters.charAt(Math.floor(Math.random() * letters.length))
//         }
//         rngStr += Math.floor((Math.random() * 900) + 100)
//         // set our initialization property to the RNG
//         this._name = rngStr
//         return this._name
//     }
//     reset() {
//         this._name = ''
//     }
// }

// module.exports = Robot;
// //NODE
// const robot = new Robot()
// console.log(robot.name)
// const differentRobot = new Robot()
// console.log(differentRobot.name)

//   it('has a name', function() {
//     expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
//   });


//WORKING TEST 1
// class Robot {
//     name() {
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         let str = ""
//         for (let i = 0; i < 2; i++){
//             str += letters.charAt(Math.floor(Math.random() * letters.length))
//         }
//         str += Math.floor(Math.random() * 1000)
//         // const myReg = str.match(/^[A-Z]{2}\d{3}$/);
//         // console.log(myReg)
//         return str
//     }
// }

// module.exports = Robot;

// //NODE
// const robot = new Robot()
// console.log(robot.name)
// let jim = robot.name
// console.log(jim)



// exp 1
// class Robot {
//     constructor(){
//         this.name =() => {
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         let str = ""
//         for (let i = 0; i < 2; i++){
//             str += letters.charAt(Math.floor(Math.random() * letters.length))
//         }
//         str += Math.floor(Math.random() * 1000)
//         // const myReg = str.match(/^[A-Z]{2}\d{3}$/);
//         // console.log(myReg)
//         return str
//         }
    
//     }
//     set name(name) { name = this.name()}
//     get name() {
//         const robotName = this.name;
//         return robotName;
//     }
    
// }

// module.exports = Robot;

// //NODE
// const robot = new Robot()
// console.log(robot.name)

// // console.log(robot.name
// //   it('has a name', function() {
// //     expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
// //   });