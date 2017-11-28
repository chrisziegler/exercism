
class Strain {
    keep(arr, cb){
        return arr.filter(cb) 
    }
    discard(arr, cb){
       return arr.filter(item => !cb(item))
    }
}

const strain = new Strain() //remove for Jasmine and Submission
module.exports = strain

//NODE

console.log(strain.discard([1, 2, 3, 11], function(e) { return e < 10; }))