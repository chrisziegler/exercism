//1ST ITERATION CONTAINS CODE COMMENTS
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
            this.tail.next = node
            node.prev = this.tail    
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
        this._length++;
    }

    pop() {
        let val = this.tail.data
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
            nodeToCheck.prev.next = nodeToCheck.next
            nodeToCheck.next.prev = nodeToCheck.prev
        }
        this._length--
        return nodeToCheck
    }
}

module.exports =  LinkedList
const list = new LinkedList
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.delete(30)
console.log(list.head)
console.log(list.head.next)
console.log(list.head.next.next)

// list.delete(20);
// console.log(list.count()) //2
// console.log(list.pop()) //30
// console.log(list.shift()) //10
// console.log(list.head)