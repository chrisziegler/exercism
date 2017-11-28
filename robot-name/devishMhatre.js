function randomChar(limit) {
  let i,
    chars = [];
  for (i = 0; i < limit; i++) {
    chars.push(String.fromCharCode(Math.floor(Math.random() * 25) + 65));
  }
  return chars.join("");
}

function randomNum(limit) {
  let j,
    nums = [];
  for (j = 0; j < limit; j++) {
    nums.push(Math.floor((Math.random() * 9) + 0));
  }
  return nums.join("");
}

function randomName() {
  return randomChar(2) + randomNum(3);
}

var Robot = function() {
  this.names = [];
  this.usedNames = [];
  this.name = this.naming();
};

Robot.prototype.naming = function() {
  let answer;
  this.flag = true;
  while (this.flag) {
    answer = randomName();
    if (!(this.usedNames.includes(answer))) {
      this.usedNames.push(answer);
      this.names = [];
      this.flag = false;
      return answer;
    }
  }
};

Robot.prototype.reset = function() {
  this.name = this.naming();
};


module.exports = Robot;