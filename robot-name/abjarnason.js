Robot = function() {
  this.name = createUniqueRandomName();
}

Robot.prototype.reset = function() {
  this.name = createUniqueRandomName();
}

let namesInUse = new Set();

function createUniqueRandomName() {
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

module.exports = Robot;