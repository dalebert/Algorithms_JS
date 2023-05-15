// Node data structure
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// List data structure
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.head) { // if not empty
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() { // Print everything in order
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        current.next = null;
        this.length--;
        if (this.length === 0) this.tail = null;
        return current;
    }
    unshift(val) {
        let current = new Node(val);
        current.next = this.head;
        this.head = current;
        if (!this.tail) this.tail = current;
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        let i = 0;
        while (i < idx) {
            current = current.next;
            i++;
        }
        return current;
    }
    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        // Convert to boolean:  ! = not (a boolean), !! = not-not, or basically the boolean value
        if (idx === 0) return !!this.shift(val);
        if (idx === this.length) return !!this.push(val);
        let prev = this.get(idx-1);
        let myNode = new Node(val);
        myNode.next = prev.next;
        prev.next = myNode;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        let prevNode = this.get(idx-1);
        let val = prevNode.next.val;
        prevNode.next = prevNode.next.next;
        this.length--;
        return val;
    }
    reverse() {
        let prev = null;
        let current = this.head;
        let next = this.head.next;
        this.tail = current;
        while (next) {
            current.next = prev;
            prev = current;
            current = next;
            next = next.next;
        }
        current.next = prev;
        this.head = current;
        return this;
    }
}

// Starting a linked list using nodes (the BAD way)
/*
var first = new Node('Hi')
first.next = new Node('there,')
first.next.next = new Node('Bob')
*/

// Better way using instance methods
var myList = new SinglyLinkedList()
myList.unshift(1)
myList.unshift(0)
myList.push(2)
myList.push('3')
myList.traverse()
myList.get(1)
myList.reverse()
myList.traverse()

/*
myList.pop()
myList.traverse()
console.log(myList.tail)
*/
