class Gigasecond {
    constructor(myDate) {
        this.myDate = myDate
    }
    date() {
      const d = new Date(this.myDate.getTime() + Math.pow(10, 12))
      return d;
    }
}

module.exports = Gigasecond

//node testing below
var gs = new Gigasecond(new Date(Date.UTC(2017, 5, 4)));
console.log(gs.date());


