var at = function(hrs, mins) {
//without args Date() returns current date and time
  var date = new Date();
  console.log(date) //2017-06-27T01:36:13.112Z
  //setHours(hour [, min, sec, ms])
  date = new Date(date.setHours(hrs, mins || 0,0,0)); //00:00

  var hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  var minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

  return hours + ':' + minutes;
};
String.prototype.plus = function(minutes) {
    console.log('this ', this) // [String: 10:00]
  var hrs = parseInt(this.split(':')[0]);
  var mins = parseInt(this.split(':')[1]);
  return at(hrs, (mins + minutes));
};
String.prototype.minus = function(minutes) {
  var hrs = parseInt(this.split(':')[0]);
  var mins = parseInt(this.split(':')[1]);
  return at(hrs, (mins - minutes));
};
String.prototype.equals = function(comp) {
  return this.toString() === comp;
};

module.exports = { at };
//NODE
// console.log(at(-25,15).toString())
console.log(at(10).plus(8).toString()) //expect 10:08