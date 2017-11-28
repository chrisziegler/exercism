// TESTS 1-49 CLEARED
class Clock {
    constructor(hrs, mins = 0) {
        this.hrs = hrs
        this.mins = mins
        this.time = {}
        this.setClock()
    }
    setClock(){
        this.setHours()
        this.setMinutes()
    }
    setTime(adjustMins){
        var originalMins = this.mins

        if(adjustMins === 0) return this.setClock()
        let remainder = adjustMins % 60
        console.log('remainder' , remainder)
        let hours = Math.floor(adjustMins / 60)
        console.log('hours before' , hours)
        hours += this.hrs
        if(Math.sign(hours) === -1 ) {
            hours %= 24
            hours += 24
        }
        console.log('hours ', hours)
        let minsRemain = (60 + remainder) % 60
    
        console.log('this.mins ', this.mins)
        console.log('minsRemain ', minsRemain)
      
    
        this.time = {
            hours: hours,
            minutes: minsRemain
        }

        return this.time
        

        
    }
    setHours(){
        if(Math.sign(this.hrs) === -1){
            if (this.hrs >= -24) {
                return this.time.hours = (this.hrs + 24)
            }
            else {
                return this.time.hours = (24 + (this.hrs % 24) )
            }    
        }
        // console.log(this.time.hours %= 24)
        return this.time.hours = (this.hrs % 24)
    }
    setMinutes(){
        let minutes = this.mins 
        this.mins %= 60

        if(Math.sign(this.mins) === -1) {
    
            return this.setTime(minutes)
           

        }
        // when the dividend in modulo operation (minutes) === 0 -> 59
        else if (minutes === this.mins ) {
            return this.time.minutes = this.mins
        }
        else if(minutes >= 120) { // need to account for multiple rollovers
                this.hrs += Math.floor(minutes / 60 )
                this.setHours()
                return this.time.minutes = this.mins  // the remainder after interger returned by Math.floor
        } else {  //case where minute >= 60 (< 120) where there's one rollover
            this.time.hours++
            return this.time.minutes = this.mins
        }   
    }
    plus(mins){
        this.setTime(mins)
        return this.toString()
    }

    equals(newClock) {
        console.log('Is new Clock instance?', newClock instanceof Clock)
        return this.hrs === newClock.hrs && this.mins === newClock.mins;
    }
    toString(){
        let hours = ('0' + this.time.hours).slice(-2)
        let minutes =('0' + this.time.minutes).slice(-2)
        return `${hours}:${minutes}`
    }
}

function at(hrs, mins = 0) {
    return new Clock(hrs, mins)
}

module.exports = {
    at: at
}

// module.exports.at = at


//NODE
console.log(at(1, -4820).toString()) //THIS IS FAILING
// console.log(at(12).equals(at(12)))


    // it('negative hour and minutes both roll over', function () {
    //   expect(at(-25, -160).toString()).toEqual('20:20');
    // });



//TESTS 1- 15 PASSING - RETOOL WITH ONE STATE on clock-exp.js
//Necessary to be able to return both this.hr and this.min
//Now I can just return one object (two is impossible)
//Revert to this if I fuck up my experiment of converting all hours to minutes
//then summing that number to perform all calculations on to hopefully simplify
//this fuckload of never ending tests
// One State One Common Unit (minutes) - this is going to rock! (maybe)
// class Clock {
//     constructor(hrs, mins = 0) {
//         this.state = { hrs, mins }
//         this.setClock()
//     }
//     setClock(){
//         this.setHours()
//         this.setMinutes()
//     }
//     setHours(){
//         if(Math.sign(this.state.hrs) === -1){
//             if (this.state.hrs >= -24){
//                 this.state.hrs += 24
//             }
//             else{
//                 this.state.hrs = 24 - Math.abs(this.state.hrs % 24)
//             }    
//         }
//         return this.state.hrs %= 24
//     }
//     setMinutes(){
//         let minutes = this.state.mins 
//         this.state.mins %= 60  
//         if (minutes === this.state.mins ){ // when the dividend in modulo operation (minutes) === 0 -> 59
//             return this.state.mins
//         } else if(minutes >= 120) { // need to account for multiple rollovers
//                 this.state.hrs += Math.floor(minutes / 60 )
//                 this.setHours()
//                 return this.state.mins  // the remainder after interger returned by Math.floor
//         } else {  //case where minute >= 60 (< 120) where there's one rollover
//             this.state.hrs++
//             return this.state.mins
//         }   
//     }
//     equals(newClock) {
//         console.log('Is new Clock instance?', newClock instanceof Clock)
//         return this.state.hrs === newClock.state.hrs && this.state.mins === newClock.state.mins;
//     }
//     toString(){
//         let hours = ('0' + this.state.hrs).slice(-2)
//         let minutes =('0' + this.state.mins).slice(-2)
//         return `${hours}:${minutes}`
//     }
// }

// const at = function(hrs, mins = 0) {
//     return new Clock(hrs, mins)
// }

// module.exports.at = at 

// //NODE
// console.log(at(-25, 0).toString())
// console.log(at(12).equals(at(12)))

