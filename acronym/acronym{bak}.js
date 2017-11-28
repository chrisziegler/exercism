// PASSING 1st ITERATION
// function parse (str) {
//     const regex = /\-/g
//     if(regex.test(str)) str = str.replace(regex, ' ')
//     let camelCase = str.match(/\B[a-z](?=[A-Z])/)
//     if(camelCase){
//         let index = camelCase.index + 1
//         str = str.substr(0, index) + ' ' + str.substr(index)
//         console.log(str)
//     }
//     const words = str.split(' ')
//     let acronym = ''
//     words.forEach( word => {
//         acronym += word[0]    
//     })
//      return acronym.toUpperCase()
// }

// module.exports = { parse }






// function Acronyms(){
// }
function parse (str) {
    const regex = /\-/g
    const regex2 = /[A-Z][a-z]+([A-Z])/
    let myTest = str.match(regex2)
    let letterFoo = myTest[1]
    let regex3 = `/${letterFoo}/`
    // let capsInMid = str.indexOf(letterFoo)
    let tryThis = str.replace(regex3, '   '+ letterFoo)
    console.log(tryThis)
    console.log(myTest)
    let hyphenFree = str.replace(regex, ' ')
    let words = hyphenFree.split(' ')
    
    // console.log(words)
    let acronym = ''
    words.forEach( word => {
       
        // if(regex.test(word)){
        //     word.replace(regex, ' ')
        // }
        acronym += word[0]

       
    })
     return acronym.toUpperCase()
}

module.exports = {
    parse
}


//Node
console.log(parse('HyperText Markup Language'))



//   str = str.split(':')[0];
//   return str.match(/\b(\w)|[A-Z]/g).join('').toUpperCase();


// describe('Acronyms are produced from', function(){
//   it('title cased phrases', function() {
//     expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
//   }); straight-forward capture first letter in each word and save to a new string

//   it('other title cased phrases', function(){
//     expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
//   });

//   it('inconsistently cased phrases', function(){
//     expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
//   });

//   it('phrases with punctuation', function() {
//     expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
//   });

//   it('other phrases with punctuation', function() {
//     expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
//   });

//   it('phrases with punctuation and sentence casing', function() {
//     expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
//   }); 
// });

//JUST A TEST DON"T TRY TO RUN THIS SHIT - WILL REMOVE SHORTLY
// class Acronym {
//   static parse(text) {
//     let words = text.split(/[\-,:\s]/);
//     let acronym = "";

//     words.forEach(function(word) {
//       let letters = word.split("");

//       letters.forEach(function(letter, index) {
//         if(index === 0 || camelCased(word) && letter === letter.toUpperCase()) {
//           acronym += letter.toUpperCase();
//         }
//       });
//     });
//     return acronym;
//   }
// }

// function camelCased(word) {
//   let upperCase = false;
//   let lowerCase = false;

//   word.substring(1).split("").forEach(function(char) {
//     if(char === char.toUpperCase()) {
//       upperCase = true;
//     }

//     if(char === char.toLowerCase()) {
//       lowerCase = true;
//     }
//   })

//   return upperCase && lowerCase ? true : false;
// }

// module.exports = Acronym;







// //Doesn't even work as implementd!!!
// function Acronyms(){
// }

// Acronyms.prototype.parse = function(string) {

//   var acronym = [];
//   var format = string
//                   .trim()
//                   .toLowerCase()
//                   .split(' ');

//   format.forEach(function(element) {
//      acronym += element.toUpperCase().split('').slice(0,1);
//   }, this);

//   return acronym;

// };

// module.exports = Acronyms;


// function Acronyms() {}
// Acronyms.prototype.parse = function(thing) {
//     var longWord = thing
//     console.log(longWord)
// }


// module.exports = Acronyms
// //NODE
// console.log(Acronyms.parse('Portable Network Graphics'))

// var Acronyms = require('./acronym'); 

// describe('Acronyms are produced from', function(){
//   it('title cased phrases', function() {
//     expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
//   });

//   it('other title cased phrases', function(){
//     expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
//   });

//   it('inconsistently cased phrases', function(){
//     expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
//   });

//   it('phrases with punctuation', function() {
//     expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
//   });

//   it('other phrases with punctuation', function() {
//     expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
//   });

//   it('phrases with punctuation and sentence casing', function() {
//     expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
//   });
// });
