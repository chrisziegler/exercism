class Clock {
    constructor(hrs, mins = 0) {
        this._hours = hrs 
        this._minutes = mins
        this.formatTime()
    }

    formatTime(...args) {
        let [plusMinus] = args
        const hrToMin = this._hours * 60
        const adjMins = plusMinus ? plusMinus : 0
        const combinedMins = hrToMin + this._minutes + adjMins
        this._hours = Math.floor(combinedMins / 60) % 24
        this._minutes = combinedMins % 60 
        if(this._hours < 0) this._hours += 24
        if(this._minutes < 0) this._minutes += 60
        return this
    }
    plus(mins) {
        this.formatTime(mins)
        return this
    }
    minus(mins) {
        this.formatTime(-mins)
        return this
    }
    equals(newClock) {
        return this.toString() === newClock.toString();
    }
    toString() {
        let hours = ('0' + this._hours).slice(-2)
        let minutes =('0' + this._minutes).slice(-2)
        return `${hours}:${minutes}`
    }
}

function at(hrs, mins = 0) {
    return new Clock(hrs, mins)
}

module.exports.at = at
