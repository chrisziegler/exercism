
var parse = str => str = str.match(/\b(\w)|[A-Z]/g).join('').toUpperCase();

module.exports.parse = parse

console.log(parse('HyperText Markup Language'))