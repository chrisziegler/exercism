//PASSING 16 of 17
class List {
    constructor(numArr){
        if(numArr === undefined) this.numStr = ''
        else this.numStr = numArr.toString()
    }
    compare(listTwo){
        let aStr = this.numStr
        let bStr = listTwo.numStr
        if(aStr.length !== 0 && bStr.length !== 0 && aStr.length < bStr.length) return this.subList(aStr, bStr)
        if(aStr.length !== 0 && bStr.length !== 0 && aStr.length > bStr.length) return this.superList(aStr, bStr)
        let result = ((a, b) => {
            let check = a === b ?  'EQUAL' :
            a.length === 0 && b.length > 0 ? 'SUBLIST' :
            a.length > 0 && b.length === 0 ?  'SUPERLIST' : 
            a !== b ? 'UNEQUAL' : 0
            if(check) return check
           
        })
        return result(aStr, bStr)
    }
    subList(a, b){
        if(b.includes(a)) return 'SUBLIST'
        else return 'UNEQUAL'
    }
    superList(a, b){
        if(a.includes(b)) return 'SUPERLIST'
            else return 'UNEQUAL'
    }
}

module.exports = List
//NODE
// var listOne = new List([1, 2, 3]);
// var listTwo = new List([2, 3, 4]);
var listOne = new List([1, 2, 5]);
var listTwo = new List([0, 1, 2, 3, 1, 2, 5, 6]);
console.log(listOne.compare(listTwo))



// //passing 12 tests
// class List {
//     constructor(numArr){
//         this._numArr = numArr
//     }
//     compare(listN){
//         let listArrA = this._numArr
//         let listArrB = listN._numArr
//         let check = !listArrA && !listArrB ?  'EQUAL' : !listArrA && listArrB ? 'SUBLIST' : listArrA && !listArrB ? 'SUPERLIST' : 0
//         if(check) return check
//         // if(listArrA === listArrB) return 'EQUAL'
//         // if(!listArrA && listArrB) return 'SUBLIST'
//         // if(listArrA && !listArrB) return 'SUPERLIST'
//         if(listArrA.length <= listArrB.length) return this.subList(listArrA, listArrB)
//         if(listArrA.length > listArrB.length) return this.superList(listArrA, listArrB)
//         // else return listArrB
//         // .reduce((arr, item, idx) => {
//         //     if(listArrA[idx] === item){

//         //     }
//         //     // arr.push(item + listArrA[idx])
//         //     return arr
//         // },[])

//     }
//     subList(a, b){

//         let result = a.reduce((arr, item) => {
     
//             if(b.includes(item)){
//                 arr.push(item)
//             }
//             // } else arr.push('')
            
//             // arr.push(item + listArrA[idx])
//             console.log(arr)
//             return arr
//         },[])
//         // console.log('index of items from b ' + indexArr)

//         if(result.length === b.length) return 'EQUAL'
//         if (result.length === a.length) return 'SUBLIST'
//         else return 'UNEQUAL'
//     }

//     superList(a, b){
//          let result = b.reduce((arr, item) => {
//             if(a.includes(item)){
//                 arr.push(item)
//             }
//             console.log(arr)
//             return arr
//         },[])
//         if(result.length === a.length) return 'EQUAL'
//         if (result.length === b.length) return 'SUPERLIST'
//         else return 'UNEQUAL'
//     }
// }


// module.exports = List
// //NODE
// // var listOne = new List([1, 2, 3]);
// // var listTwo = new List([2, 3, 4]);
// var listOne = new List([1, 2, 5]);
// var listTwo = new List([0, 1, 2, 3, 1, 2, 5, 6]);
// console.log(listOne.compare(listTwo))
// // console.log(listOne._numArr)
// // console.log(listTwo._numArr)
