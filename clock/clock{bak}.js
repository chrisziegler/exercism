
class Clock {
    constructor(hrs, mins = 0) {
        this.hrs = hrs
        this.mins = mins
        this.setClock()
    }
    setClock(){
        this.setHours()
        this.setMinutes()
    }
    setHours(...ot){
        let [hours] = ot
        if(hours) this.hrs += ot
        return this.hrs %= 24
    }
    setMinutes(){
        let minutes = this.mins //60 (or if 0 -> 0)
        this.mins %= 60  // 0 (or if 0 -> 0)
        if (minutes === this.mins ){
            return this.mins
        } else {
            if(minutes > 119){
                let ot = this.hrs + Math.floor(minutes / 60 )
                this.setHours(ot)
                return this.mins
            }
            this.hrs++
            return this.mins
        }
    }

    equals(newClock) {
        console.log('Is new Clock instance?', newClock instanceof Clock)
        return this.hrs === newClock.hrs && this.mins === newClock.mins;
    }
    

    toString(){
        let hours = ('0' + this.hrs).slice(-2)
        let minutes =('0' + this.mins).slice(-2)
        return `${hours}:${minutes}`
    }
}

const at = function(hrs, mins = 0) {
    return new Clock(hrs, mins)
}

module.exports.at = at 

//NODE
console.log(at(1, 90).toString())
// console.log(at(12).equals(at(12)))






//First 2 activated tests, it:
// var at = require('./clock').at;
//   describe('Creating a new clock with an initial time', function () {
//     it('on the hour', function () {
//       expect(at(8).toString()).toEqual('08:00');

    // describe('Construct two separate clocks, set times, test if they are equal', function () {

    //   it('clocks with same time', function () {
    //     expect(at(15, 37).equals(at(15, 37))).toBeTruthy();
    //   });



//     xit('past the hour', function () {
//       expect(at(11, 9).toString()).toEqual('11:09');

// THEN
    //  describe('Adding and subtracting minutes', function () {

    //   xit('add minutes', function () {
    //     expect(at(10, 0).plus(3).toString()).toEqual('10:03');
    //   });
