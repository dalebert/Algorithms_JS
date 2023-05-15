class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        var idx = this.heap.length - 1;
        var parentIdx = Math.floor((idx - 1) / 2);
        while (this.heap[idx] > this.heap[parentIdx]) {
            let temp = this.heap[idx];
            this.heap[idx] = this.heap[parentIdx];
            this.heap[parentIdx] = temp;
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }
    remove() { // Extracts the max value
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        this.heap[0] = end;
        this.sinkdown();
        return max;
    }
    sinkdown() {
        let idx = 0
        const length = this.heap.length;
        const element = this.heap[0]; // value that needs to trickle down
            
        while (true) {
            let left = 2 * idx + 1;
            let right = left + 1;
            let lval, rval;
            let swap = null;

            if (left < length) {
                lval = this.heap[left];
                if (lval > element)
                    swap = left;
            }
            if (right < length) {
                rval = this.heap[right];
                if (
                    (swap === null && rval > element) ||
                    (swap !== null && rval > lval)
                ) swap = right;
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        } // end while()
    } // end sinkdown()
}

myHeap = new MaxBinaryHeap()
myHeap.insert(41)
myHeap.insert(39)
myHeap.insert(33)
myHeap.insert(18)
myHeap.insert(27)
myHeap.insert(12)
myHeap.insert(55)
