//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const Year = function(input) {
    this.year = (Number.isInteger(input)) ? input : console.log(`enter ${input} as interger`);
};

Year.prototype.isLeap = function() {
    checkYear = this.year;
    return checkYear % 400 === 0 || (checkYear % 4 === 0 && checkYear % 100 !== 0);
}
module.exports = Year;

// run in terminal with $node leap.js
const currentYear = new Year(2017);
console.log(currentYear.isLeap()); //false