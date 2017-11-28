const circularBuffer = size => new CircularBuffer(size)
const bufferEmptyException = () => new Error('Buffer EMPTY');
const bufferFullException = () => new Error('Buffer FULL');

function CircularBuffer(size){
    let bufferArr = []
    const bufferSize = size
    
    this.read = function() {
        if (bufferArr.length === 0)  throw bufferEmptyException();
        return bufferArr.shift()
    }
    this.write = function(item) {
        if(bufferArr.length === bufferSize) throw bufferFullException()
        if(item === undefined || item === null) return
        bufferArr.push(item)
    }
    this.clear = function() {
        bufferArr = []
    }
    this.forceWrite = function(item) {
        if(bufferArr.length === bufferSize) {
            bufferArr.shift()
            bufferArr.push(item)
            return
        }
        bufferArr.push(item)
    }
}

module.exports = {circularBuffer, bufferEmptyException, bufferFullException};
