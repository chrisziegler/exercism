var Words = function() {
  this.count = function(str) {
    var wordsArray = str.toLowerCase().replace(/[-`~¡!@#$%^&*()_|+=¿?;:",.<>\{\}\[\]\\\/\s]/gi, ' ').split(' ');
    var wordsObj = Object.create(null);
    wordsArray.forEach(word => {
      word = word.replace(/^\'|\'$/g, '');
    //   if(wordsObj.hasOwnProperty(word)){
          word === '' ? null : !wordsObj[word] ? wordsObj[word] = 1 : wordsObj[word] ++;
      
    
    });
    // console.log('Prototype stuff: ', Object.keys(wordsObj));
    // console.log(str, ' : ', wordsObj);
    // wordsObj[constructor] ? wordsObj[constructor] = 1 : null;
    return wordsObj;
  };
};

module.exports = Words;
const words = new Words()
console.log(words.count('reserved words like constructor and toString ok?'))