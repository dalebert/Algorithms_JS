class SimplePriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vtx) {
        if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
    }
    addEdge(vtx1, vtx2, weight) {
        this.addVertex(vtx1);
        this.addVertex(vtx2);
        this.adjacencyList[vtx1].push({node:vtx2, weight});
        this.adjacencyList[vtx2].push({node:vtx1, weight});
    }
    dijkstra(start, finish) {
        const nodes = new SimplePriorityQueue();
        const distances = {};
        const previous = {}; // Fastest paths so far
        let path = []; // to return at the end
        let smallest;

        // Initial state
        for (let vtx in this.adjacencyList) {
            if (vtx === start) {
                distances[vtx] = 0;
                nodes.enqueue(vtx, 0);
            } else {
                distances[vtx] = Infinity;
                nodes.enqueue(vtx, Infinity);
            }
            previous[vtx] = null;
        }

        // As long as there is something to visit...
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // when we are done
                // build up path to return at the end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighbording nodes
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous -- how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // eunqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var wg = new WeightedGraph();
wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('E', 'F', 1);
