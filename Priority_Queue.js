class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = []
    }
    enqueue(value, priority) {
        let qNode = new Node(value, priority);
        this.queue.push(qNode);
        this.bubbleup();
    }
    dequeue() {
        if (this.queue.length === 0) return null;
        const max = this.queue[0];
        const end = this.queue.pop();
        this.queue[0] = end;
        this.sinkdown();
        return max;
    }
    bubbleup() {
        let idx = this.queue.length - 1;
        const element = this.queue[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.queue[parentIdx];
            if (element.priority >= parent.priority) break;
            this.queue[parentIdx] = element;
            this.queue[idx] = parent;
            idx = parentIdx;
        }
    }
    sinkdown() {
        let idx = 0
        const length = this.queue.length;
        const element = this.queue[0]; // value that needs to trickle down
            
        while (true) {
            let left = 2 * idx + 1;
            let right = left + 1;
            let lval, rval;
            let swap = null;

            if (left < length) {
                lval = this.queue[left];
                if (lval.priority < element.priority)
                    swap = left;
            }
            if (right < length) {
                rval = this.queue[right];
                if (
                    (swap === null && rval.priority < element.priority) ||
                    (swap !== null && rval.priority < lval.priority)
                ) swap = right;
            }
            if (swap === null) break;
            this.queue[idx] = this.queue[swap];
            this.queue[swap] = element;
            idx = swap;
        } // end while()
    } // end sinkdown()
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5)
ER.enqueue("gunshot would", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)
