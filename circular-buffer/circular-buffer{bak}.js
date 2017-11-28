function CircularBuffer(size){
    let bufferArr = []
    const bufferSize = size
    
    this.read = function() {
        if (bufferArr.length === 0)  throw bufferEmptyException();
        return bufferArr.shift()
    }
    this.write = function(item) {
        if(bufferArr.length === bufferSize) throw bufferFullException()
        if(!item) return
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
const circularBuffer = size => new CircularBuffer(size)
const bufferEmptyException = () => new Error('Buffer EMPTY');
const bufferFullException = () => new Error('Buffer FULL');

module.exports = {circularBuffer, bufferEmptyException, bufferFullException};
//ACTIVATE FOR JASMINE TESTS - DUPLICATED FOR NODE BELOW

//NODE
//Forced Writes - non-full buffer
// var buffer = circularBuffer(2);
// buffer.write('1');
// buffer.forceWrite('2');
// console.log(buffer.read()) //1
// console.log(buffer.read()) //2
// console.log(buffer.read()) //buffer EMPTY

//Forced Writes
// forced writes over write oldest item in a full buffer '1'
// shift w/o retuning that value - 1- than push as normal
// var buffer = circularBuffer(2);
// buffer.write('1');
// buffer.write('2');
// buffer.forceWrite('A');
// console.log(buffer.read()) //2
// console.log(buffer.read()) //A
// console.log(buffer.read()) //buffer EMPTY


//TEST 2, 5
// var buffer = circularBuffer(3);
// buffer.write('1');
// buffer.write('2');
// console.log(buffer.read()) //1
// buffer.write('3');
// console.log(buffer.read()) //2
// console.log(buffer.read()) //3

//Buffer Full Exception
// var buffer = circularBuffer(2);
// buffer.write('1');
// buffer.write('2');
// buffer.write('A');


//LATER TEST
// var buffer = circularBuffer(3);
// buffer.write(null);
// buffer.write(undefined);
// [1,2,3].map(function(i) { buffer.write(i.toString()); });
// console.log(buffer.read()) //1


//TEST 4
// var buffer = circularBuffer(2);
// buffer.write('1');
// buffer.write('2');
// buffer.clear()
// buffer.read() //Throw 'Buffer EMPTY' error
// buffer.write('3');
// buffer.write('4');
// console.log(buffer.read()) //3
// console.log(buffer.read()) //4


//   it('clearing a buffer', function() {
//     var buffer = circularBuffer(2);
//     buffer.write('1');
//     buffer.write('2');
//     buffer.clear();
//     expect(buffer.read).toThrowError;
//     buffer.write('3');
//     buffer.write('4');
//     expect(buffer.read()).toBe('3');
//     expect(buffer.read()).toBe('4');
//   });