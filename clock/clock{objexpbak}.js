//TESTS ALL 50 PASSING!!!- VERSION WITH CONSOLE LOGS FOR TESTING

class Clock {
    constructor(hrs, mins = 0) {
        this.state = { hrs, mins }
        this.formatTime()
    }
    formatTime(...args) {
        let [addSub] = args
        console.log(addSub)
        let minutes = this.state.mins 
        let hrToMin = this.state.hrs * 60
        let adjMins = addSub ? addSub : 0
        let combinedMins = hrToMin + minutes + adjMins
        console.log('combinedMins minutes ',combinedMins) //-45
        let totalHrs = Math.floor(combinedMins / 60) 
        console.log('totalHrs ',totalHrs)  //-1
        let totalHrs24 = totalHrs % 24
        console.log('totalHrs24 ', totalHrs24)
        if(Math.sign(totalHrs24) === -1) totalHrs24 += 24
        console.log('24Hr negative correction ', totalHrs24)
        let leftoverMins = combinedMins % 60 
        if(Math.sign(leftoverMins) === -1) leftoverMins += 60
        console.log('leftoverMins negative min correction ', leftoverMins)
        console.log('leftoverMins ', leftoverMins) //-45
        this.state = {
            hrs: totalHrs24,
            mins: leftoverMins
        }
        return this.state
    }
    
    plus(mins) {
        this.formatTime(mins)
        return this.toString()
    }
    minus(mins) {
        this.formatTime(-mins)
        return this.toString()
    }
    equals(newClock) {
        console.log('Is new Clock instance?', newClock instanceof Clock) //true
        return this.state.hrs === newClock.state.hrs && this.state.mins === newClock.state.mins;
    }
    toString() {
        let hours = ('0' + this.state.hrs).slice(-2)
        let minutes =('0' + this.state.mins).slice(-2)
        return `${hours}:${minutes}`
    }
}

function at(hrs, mins = 0) {
    return new Clock(hrs, mins)
}

module.exports = {
    at: at
}

//NODE
// console.log(at(-25,15).toString())
console.log(at(10, 3).minus(3).toString()) //expect 10:00

  


