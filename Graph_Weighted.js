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
}

wg = new WeightedGraph();
wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('C', 'D', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('C', 'F', 4);
wg.addEdge('F', 'E', 1);
