class Strain {
    keep(arr, cb){
        return arr.filter(cb) 
    }
    discard(arr, cb){
        let i = 0, discard = []
        while(i < arr.length){
            if(!cb(arr[i])) {
                discard.push(arr[i])
            }  
            i++
        }
        return discard
    }
}

module.exports = new Strain()
