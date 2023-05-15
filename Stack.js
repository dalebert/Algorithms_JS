class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        var newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        var myNode = this.first;
        this.first = this.first.next;
        this.size--;
        if (this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return myNode.value;
    }
}

var myStack = new Stack()
myStack.push('0')
myStack.push('1')
myStack.push('2')
