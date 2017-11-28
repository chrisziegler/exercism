const Allergies = function(score) {
    this.score = score
    const obj = [
        {allergen: "eggs", id: 1},
        {allergen: "peanuts", id: 2},
        {allergen: "shellfish", id: 4},
        {allergen: "strawberries", id: 8},
        {allergen: "tomatoes", id: 16},
        {allergen: "pollen", id: 64},
        {allergen: "chocolate", id: 32},
        {allergen: "cats", id: 128}
    ]


    this.list = function() {
    
        let base2 = this.score.toString(2)
        let binArr = [...base2].reverse()
        while(binArr.length < 8) binArr.push('0')
            console.log(`binArr: ${binArr}`)
        return obj.reduce((arr, item, currIdx) => {
            if(binArr[currIdx] === '1'){
                arr.push(item.allergen)
            } 
       
            // arr.push(`item: ${item.allergen} id: ${item.id} index: ${currIdx} binArr: ${binArr[currIdx]}`)
            return arr
        },[])
       
    } 
}

module.exports = Allergies

//NODE 
const allergies = new Allergies(4)
console.log(allergies.list())