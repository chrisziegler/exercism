const Robot = function() {
//after this function has been called once
//this.name = the value returned by createUniqueRandomName()
//is apparently the same as saying 
//this.name = name
//so test 2 (recreated below) passes as it just keeps looking
//up this new property on our robot instance - robot.name
//the reset method simply sets this.name back to equaling calling the cURN() function
  this.name = createUniqueRandomName();
  this.color = 'red'



function createUniqueRandomName() {
  let namesInUse = new Set();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  const digits = '0123456789';
  let random = function(val) { return val[Math.floor(Math.random() * val.length)]; }
  let createName = function() { return random(letters) + random(letters) + random(digits) + random(digits) + random(digits); }
  let name = createName();
  while (namesInUse.has(name)) {
    name = createName();
  }
  namesInUse.add(name);
  return name;
}
}

Robot.prototype.reset = function() {
  this.name = createUniqueRandomName();
}



module.exports = Robot;
const robot = new Robot()
for(let i = 0; i < 5; i++) {
    console.log('robot color: ' + robot.color + ' robot name#: ' +i+ ' ' + robot.name)
}
