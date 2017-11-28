//CLEAN BACK-up prior to refactor
module.exports = function Allergies(score) {
    this.score = score
    const obj = [
        {allergen: "eggs", id: 1},
        {allergen: "peanuts", id: 2},
        {allergen: "shellfish", id: 4},
        {allergen: "strawberries", id: 8},
        {allergen: "tomatoes", id: 16},
        {allergen: "chocolate", id: 32},
        {allergen: "pollen", id: 64},
        {allergen: "cats", id: 128}
    ]

    this.list = function() {
        while(this.score > 256) this.score -= 256
        let base2 = this.score.toString(2)
        let binArr = [...base2].reverse()
        while(binArr.length < 8) binArr.push('0')
        return obj.reduce((arr, item, currIdx) => {
            if(binArr[currIdx] === '1'){
                arr.push(item.allergen)
            } 
            return arr
        },[])
    } 

    this.allergicTo = function(substance){
        return this.list().includes(substance)
    }
}



// //ALL TESTS PASS - prior to code clean-up/refactoring as necessary
// const Allergies = function(score) {
//     this.score = score
//     const obj = [
//         {allergen: "eggs", id: 1},
//         {allergen: "peanuts", id: 2},
//         {allergen: "shellfish", id: 4},
//         {allergen: "strawberries", id: 8},
//         {allergen: "tomatoes", id: 16},
//         {allergen: "chocolate", id: 32},
//         {allergen: "pollen", id: 64},
//         {allergen: "cats", id: 128}
//     ]


//     this.list = function() {
//         while(this.score > 256) this.score -= 256 //handle 9-bit (or larger) numbers
//         let base2 = this.score.toString(2) // toString radix 2 converts decimal to binary
//         let binArr = [...base2].reverse() // convert to array, reverse to map over array in same order as obj
//         while(binArr.length < 8) binArr.push('0') // convert to 8-bit for direct 1 to 1 mapping
//             // console.log(`binArr: ${binArr}`)
//         return obj.reduce((arr, item, currIdx) => {
//             if(binArr[currIdx] === '1'){
//                 arr.push(item.allergen)
//             } 
       
//             // arr.push(`item: ${item.allergen} id: ${item.id} index: ${currIdx} binArr: ${binArr[currIdx]}`)
//             return arr
//         },[])
//     } 

//     this.allergicTo = function(substance){
//         // const subScore = obj.find(item => item.allergen === substance) //not needed
//         // return subScore.id //'pollen' = 64

//         const subArr = this.list()
//         return subArr.includes(substance)
//     }
    
// }

// module.exports = Allergies

// //NODE 
// const allergies = new Allergies(5)
// // console.log(allergies.list())
// console.log(allergies.allergicTo('eggs'))

// //Back on track after my top-notch pattern recognition skills realized the allergy
// //scores represent a base 2 8 bit pattern. - Partial proof of concept below
// const Allergies = function(score) {
//     this.score = score
//     const obj = [
//         {allergen: "eggs", id: 1},
//         {allergen: "peanuts", id: 2},
//         {allergen: "shellfish", id: 4},
//         {allergen: "strawberries", id: 8},
//         {allergen: "tomatoes", id: 16},
//         {allergen: "pollen", id: 64},
//         {allergen: "chocolate", id: 32},
//         {allergen: "cats", id: 128}
//     ]


//     this.list = function() {
    
//         const base2 = this.score.toString(2)
//         const binArr = [...base2].reverse()
//         while(binArr.length < 8) binArr.push('0')
//             console.log(`binArr: ${binArr}`)
//         return obj.reduce((arr, item, currIdx) => {
//             if(binArr[currIdx] === '1'){
//                 arr.push(item.allergen)
//             } 
       
//             // arr.push(`item: ${item.allergen} id: ${item.id} index: ${currIdx} binArr: ${binArr[currIdx]}`)
//             return arr
//         },[])
       
//     } 
// }

// module.exports = Allergies

// //NODE 
// const allergies = new Allergies(3)
// console.log(allergies.list())

// //This 'works'  on the big tests requiring everything to print, but fails on the simple stuff :/
// const Allergies = function(score) {
//     this.score = score
//     const obj = {
//         eggs: 1,
//         peanuts: 2,
//         shellfish: 4,
//         strawberries: 8,
//         tomatoes: 16,
//         chocolate: 32,
//         pollen: 64,
//         cats: 128
//     }

//     this.list = function() {
//         let e = 0
//         while (Math.pow(2, e) < this.score) e++
//         let start = Math.pow(2, e) - this.score
//         let finish = Math.pow(2, e - 1)

//         return Object.keys(obj).reduce((pre, item) => {
//             if(obj[item] >= start && obj[item] <= finish){
//                 pre.push(item) 
//             }
//             return pre
//         },[])
//     }   
// }

// module.exports = Allergies

// //NODE 
// const allergies = new Allergies(4)
// console.log(allergies.list())


// const Allergies = function(score) {
//     this.score = score
//     const obj = {
//         eggs: 1,
//         peanuts: 2,
//         shellfish: 4,
//         strawberries: 8,
//         tomatoes: 16,
//         chocolate: 32,
//         pollen: 64,
//         cats: 128
//     }

//     const myArr = []
//     this.list = function() {

//         return Object.keys(obj).reduce((pre, item) => {
//             pre.push(obj[item]) 
//             return pre  // [ 1, 2, 4, 8, 16, 32, 64, 128 ]
//         },[])
//         // return Object.keys(obj).map(item => `key=${item}, value=${obj[item]}`)
//         }
//         // return Object.keys(obj)[0] //eggs

//         // if(this.score) item.push(this.score)
//         // return item
    
// }

// module.exports = Allergies

// //NODE 
// const allergies = new Allergies(0)
// console.log(allergies.list())