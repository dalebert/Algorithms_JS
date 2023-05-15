class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vtx) {
        if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
    }
    addEdge(vtx1, vtx2) {
        this.addVertex(vtx1);
        this.addVertex(vtx2);
        this.adjacencyList[vtx1].push(vtx2);
        this.adjacencyList[vtx2].push(vtx1);
    }
    /* My original way:
    removeEdge(vtx1, vtx2) {
        let arr = [];
        for (let x of this.adjacencyList[vtx1])
            if (x !== vtx2) arr.push(x);
        this.adjacencyList[vtx1] = arr;
        arr = [];
        for (let x of this.adjacencyList[vtx2])
            if (x !== vtx1) arr.push(x);
        this.adjacencyList[vtx2] = arr;
    } */
    // Professor's way:
    removeEdge(vtx1, vtx2) {
        this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
            v => v !== vtx2
        );
        this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
            v => v !== vtx1
        );
    }
    removeVertex(vtx) {
        for (let x of this.adjacencyList[vtx]) removeEdge(x, vtx);
        delete this.adjacencyList[vtx];
    }
    dfsRec(start) { // Argument is starting vertex
        const visited = {};
        const result = [];
        const adjList = this.adjacencyList;
        function dfs_helper(start) {
            if (!adjList[start]) return null;
            if (visited[start]) return;
            result.push(start);
            visited[start] = true;
            for (let x of adjList[start]) dfs_helper(x);
        }
        dfs_helper(start);
        return result;
    }
    dfsIter(start) {
        const stack = [start];
        const result = [];
        const visited = {};

        while (stack.length) {
            let vertex = stack.pop();
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                for (let x of this.adjacencyList[vertex]) stack.push(x);
            }
        }
        return result;
    }
    bfs(start) {
        const stack = [start];
        const result = [];
        const visited = {};

        while (stack.length) {
            let vertex = stack.shift();
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                for (let x of this.adjacencyList[vertex]) stack.push(x);
            }
        }
        return result;
    }
}

gr = new Graph;
gr.addEdge('A', 'B');
gr.addEdge('A', 'C');
gr.addEdge('B', 'D');
gr.addEdge('C', 'E');
gr.addEdge('D', 'E');
gr.addEdge('D', 'F');
gr.addEdge('E', 'F');
