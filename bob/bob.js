class Bob {
    hey(talk) {
        const lastChar = talk.slice(-1)
        const allCaps = talk.toUpperCase()
        const patt = /\d(,)?$/g
        const patt2 = /\d\?/g
        const patt3 = /[a-zA-z]/
        if  (patt2.test(talk)) return 'Sure.'
        if  (patt.test(talk)) return 'Whatever.'
        if (patt3.test(talk) && talk === allCaps) return 'Whoa, chill out!'
        if (lastChar === '?') return 'Sure.'
        if (talk.trim() === '') return 'Fine. Be that way!'
        if (lastChar === '!' || talk !== allCaps)  return 'Whatever.'
        if (lastChar === '.') return 'Whatever.'
    }
}

module.exports = Bob


// testing stuff below here
const bob = new Bob()
console.log(bob.hey(''))

const str = '1, 2, 3'
const patt = /\d(,)?/g; //true
console.log(patt.test(str)) 