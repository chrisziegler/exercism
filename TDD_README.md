JASMINE TDD - Informs both styles on basic needed structure
var FoodChain = require('./food-chain');
describe('Food Chain', function () {
  var song = new FoodChain();

  it('fly', function () {
    var expected = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(1)).toEqual(expected);
  });

//CONSTRUCTOR SYNTAX EXAMPLE
const FoodChain = function() {
    // not passing any arguments -> In Jasmine:  var song = new FoodChain();
    // so don't need this.arg = arg; to pass properties
}
FoodChain.prototype.verse = function(stanza){
    //do && return stuff here
}

//CommonJS Module Syntax here
// module.exports = FoodChain
//or I guess use a function declartion: 
//module.exports = function FoodChain() {}

//ES6 CLASS SYNTAX
class FoodChain  {
    constructor(props) {
        //pass arguments if needed - depending if Jasmine
        //is instantiating a new Class with (args)
        //otherwise no constructor needed
    }
    // ES6 shorthand for a method on class
    // function declaration would be: function verse(num) {}
    verse() {
        //do & return stuff here        
    }
}
//CommonJS Module Syntax here
// module.exports = FoodChain <or>
//module.exports = class FoodChain {...}


//NODE TESTS HERE - for getting console.log/etc feedback BOTH STYLES outside main IDE terminal
const song = new FoodChain()
song.verse(1);