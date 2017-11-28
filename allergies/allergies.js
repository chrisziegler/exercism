const Allergies = function(score) {
    this.score = score
    const allergen = ["eggs", "peanuts", "shellfish", 
    "strawberries","tomatoes", "chocolate", "pollen", "cats"]

    this.list = function() {
        while(this.score > 256) this.score -= 256
        const base2 = this.score.toString(2)
        const binaryArr = [...base2].reverse()
        return allergen.reduce((arr, item, currIdx) => {
            if(binaryArr[currIdx] === '1'){
                arr.push(item)
            } 
            return arr
        },[])
    } 

    this.allergicTo = function(substance){
        return this.list().includes(substance)
    }
}

module.exports = Allergies

