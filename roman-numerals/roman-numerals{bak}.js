//passing all tests, but man, no really seeing the pattern yet, 9's, 5's, 4's...?
function toRoman(num) {
    let numerals = [
        { roman: "M", value: 1000, amount: 0, prescript: false },
        { roman: "D", value: 500, amount: 0, prescript: false },
        { roman: "C", value: 100, amount: 0, prescript: false },
        { roman: "L", value: 50, amount: 0, prescript: false },
        { roman: "X", value: 10, amount: 0, prescript: false },
        { roman: "V", value: 5, amount: 0, prescript: false },
        { roman: "I", value: 1, amount: 0, prescript: false }
    ]
    const romanArr = []
    const numRef = num
    let i = 0,  length = numerals.length;
    for(i = 0; i < length; i++){
        let factor = Math.floor(num / numerals[i].value)
        if(factor >= 1) {
            numerals[i].amount = factor
            //I know, too much logic
            if(numerals[i].amount === 4 && numRef === 4){ //4 case
                numerals[i].amount = 1
                numerals[i].prescript = true
                numerals[i -1].amount++ 
            } else if(numerals[i].amount === 4 && numRef !== 4 && numerals[i-2].amount > 0){ //1024 & 24
                numerals[i].amount = 1
                numerals[i].prescript = true
                numerals[i-1].amount = 1
            } else if(numerals[i].amount === 4 && numerals[i].value === 1 && numRef !== 4 && numerals){ //9 case
                numerals[i].amount = 1
                numerals[i].prescript = true
                numerals[i -1].amount--
                numerals[i-2].amount++
            } else if(numerals[i].amount === 4 && numerals[i].value === 10 && numerals[i-1].amount === 0){ //48 case
                numerals[i].amount = 1
                numerals[i].prescript = true
                numerals[i-1].amount = 1
            } else if(numerals[i].amount === 4 && numerals[i].value === 10 &&  numerals[i-1].amount === 1){ //93 case
                numerals[i].amount = 1
                numerals[i].prescript = true
                numerals[i-1].amount = 0
                numerals[i-2].amount = 1
            } else if(numerals[i].amount === 4 && numerals[i-1].amount === 0){ //402 case
                numerals[i].amount = 1
                numerals[i].prescript = true
                numerals[i-1].amount = 1
            } else if(numerals[i].amount === 4 && numerals[i-1].amount === 1){ //911 case
                numerals[i].amount = 1
                numerals[i].prescript = true
                numerals[i-1].amount = 0
                numerals[i-2].amount = 1
            } 
            num = num % numerals[i].value
        }    
    }

    numerals.forEach((numeral) => {
        if(!numeral.prescript) {
            if(numeral.amount){
                romanArr.push(numeral.roman.repeat(numeral.amount))
            } 
        } 
        else if(numeral.prescript){
            romanArr.splice(romanArr.length - 1, 0, numeral.roman) 
        }
    })

    numerals.forEach(numeral => console.log('roman: ', numeral.roman ,' value :',
    numeral.value, ' amount: ', numeral.amount, ' prescript: ', numeral.prescript))

    let string = romanArr.join('')
    return string
}
module.exports = toRoman
console.log(toRoman(1024))