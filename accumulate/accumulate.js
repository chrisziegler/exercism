function accumulate (arr, cb) {
    let result = []
    let i = 0, length = arr.length
    for(i; i < length; i++){
        result.push(cb(arr[i]))
    }
    
    return result
}
module.exports = accumulate
