// Node data structure
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// List data structure
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.head) { // if not empty
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.prev;
            this.tail.next = null;
        }
        current.prev = null;
        this.length--;
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        current.next = null;
        this.length--;
        if (this.length === 0)
            this.tail = null
        else
            this.head.prev = null;
        return current;
    }
    unshift(val) {
        let current = new Node(val);
        if (!this.head) {
            this.tail = current;
        }
        else {
            this.head.prev = current;
            current.next = this.head;
        }
        this.head = current;
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        if (idx < (this.length / 2)) {
            let i = 0;
            while (i < idx) {
                current = current.next;
                i++;
            }
        } else {
            current = this.tail;
            let i = this.length - 1;
            while (i > idx) {
                current = current.prev;
                i--;
            }            
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
        let newNode = new Node(val);
        newNode.prev = prev;
        newNode.next = prev.next;
        prev.next = newNode;
        newNode.next.prev = newNode;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        let prev = this.get(idx-1);
        let rNode = prev.next;
        prev.next = prev.next.next;
        prev.next.prev = prev;
        rNode.next = null;
        rNode.prev = null;
        this.length--;
        return rNode;
    }
    traverse() { // Print everything in order
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
        return "Done";
    }
    // Nothing past this fully implemented yet
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
var myList = new DoublyLinkedList()
myList.push(0)
myList.push(1)
myList.push(2)
myList.push('3')
myList.push(4)
myList.push(5)
myList.push(6)
myList.push(7)
myList.push(8)
myList.push(9)
myList.traverse()
