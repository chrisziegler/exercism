function score(letters) {
    let rules = new Map()
    .set('A', 1).set('B', 3).set('C', 3).set('D', 2).set('E', 1).set('F', 4).set('G', 2)
    .set('H', 4).set('I', 1).set('J', 8).set('K', 5).set('L', 1).set('M', 3).set('N', 1)
    .set('O', 1).set('P', 3).set('Q', 10).set('R', 1).set('S', 1).set('T', 1).set('U', 1)
    .set('V', 4).set('W', 4).set('X', 8).set('Y', 4).set('Z', 10)

    //[ 'A', 1 ] [ 'B', 3 ]...]
    // console.log(...rules) 

    // A: 1
    // B: 3
    // C: 3
    // D: 2
    // ...
    // for (var key of rules.keys()) {  
    //     console.log(key + ': '+ rules.get(key));
    // }
 
    if(!letters) return 0
    letters = [...letters.toUpperCase()]
    // [ 'Q', 'U', 'I', 'R', 'K', 'Y' ]
    // console.log(letters) 

    let total = letters.reduce((sum, letter) => {
        return sum + rules.get(letter)
    }, 0)
    return total
}

module.exports = score
console.log(score('quirky'))
