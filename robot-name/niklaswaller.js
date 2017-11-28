/*
RESULTS:

.....F

Failures:

  1) Robot there can be lots of robots with different names each
   Message:
     Expected 9928 to equal 10000.
*/

'use strict';

let Robot = module.exports = function () {

  this.robotNames = {};

  this.randomLetter = function () {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  this.setName = function () {
    let name = '';
    
    for (var i = 0; i < 2; i++)
      name += this.randomLetter();

    name += (Math.random() + '').substr(2, 3);

    if (this.robotNames[name])
      return this.setName();

    this.robotNames[name] = true;

    return name;
  };
  
  this.name = this.setName();
  
  this.reset = function () {
    this.name = this.setName();
  };

};