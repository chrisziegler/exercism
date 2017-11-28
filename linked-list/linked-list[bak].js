class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }   
}

class LinkedList { 
    constructor() {
        this._length = 0
        this.head = null
        this.tail = null
    }
    count() {
        return this._length
    }

    push(data) {
        let node = new Node(data)
        if(this._length) {
            //last existing node in list needs to link to this new pushed node
            this.tail.next = node
            // this new nodes backlink should link to the last existing node in the list
            //this link obvioulsy needs to be set before we redefine our tail below
            node.prev = this.tail
            //this is a tricky part conceptual
            //we have set both the prev (on our new node) and next properties (on the existing tail)
            // we now need to reset our tail to this just added node as the last in the list
            this.tail = node

        //otherwise if list is empty we need to set our head and tail to the node being added
        } else {
            this.head = node
            this.tail = node
        }
        this._length++;

    }

    pop() {
        let val = this.tail.data
        //we just write over the last value in the list
        //by making the last value, the next to last value
        this.tail = this.tail.prev
        return val
    }

    unshift(data){
        let node = new Node(data)
        if(this._length) {
            this.head.prev = node
            node.next = this.head
            this.head = node
        } else {
            this.head = node
            this.tail = node
        }
        this._length++
    }

    shift() {
        let val = this.head.data
        this.head = this.head.next
        return val
    }

    delete(data){
        let nodeToCheck = this.head
        while(nodeToCheck.data !== data){
            nodeToCheck = nodeToCheck.next
        }
        if(this._length === 1){
            this.head = null
            this.tail = null
            this._length--
            return nodeToCheck
        }
        else if(nodeToCheck.prev === null){
            this.head = nodeToCheck.next
        }
        else if(nodeToCheck.next === null){
            this.tail = nodeToCheck.prev
        }
        else {
            //this is pretty trippy, but works because OBJECTS SAVE BY REFERENCE
            //rather than BY VALUE, we're just writing over the values on the memory id location 
            //shared by the "actual" Node
            nodeToCheck.prev.next = nodeToCheck.next
            nodeToCheck.next.prev = nodeToCheck.prev
        }
        this._length--
        return nodeToCheck
    }
}

module.exports = LinkedList

//To look at the actual resulting data structure try running the following
//in Node JS
const list = new LinkedList()
list.push(10);
list.push(20);
list.push(30);
list.push(40)
list.delete(30)
console.log(list.head)
console.log(list.head.next)
console.log(list.head.next.next)




// list.push(10);
// list.push(20);
// console.log(list.shift()) //10
// console.log(list.shift()) //20
// // console.log(list.pop()) //20
// // console.log(list.pop())  //10

// list.unshift(10)
// list.unshift(20)
// console.log(list.shift()) //20
// console.log(list.shift()) //10

// list.unshift(10)
// list.unshift(20)
// console.log(list.pop()) //10
// console.log(list.pop()) //20

// list.push(10)
// list.push(20)
// list.push(30)
// list.push(40)
// console.log(list.count())

// list.push(10);
// list.push(20);
// list.push(30);
// list.delete(20);
// console.log(list.count()) //2
// console.log(list.pop()) //30
// console.log(list.shift()) //10

list.push(10);
list.delete(10);
console.log(list.count()) //0