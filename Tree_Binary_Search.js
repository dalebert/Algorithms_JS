class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    bfs() { // Breadth First Search
        var queue = [],
            data = [],
            current = this.root;
            queue.push(current);
        while (queue.length) { // Zero is false
            current = queue.shift();
            data.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return data;
    }
    dfs_pre() { // PreOrder Depth First Search
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            return;
        }
        traverse(this.root)
        return data;
    }
    dfs_post() { // PreOrder Depth First Search
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
            return;
        }
        traverse(this.root)
        return data;
    }
    dfs_inorder() { // PreOrder Depth First Search
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
            return;
        }
        traverse(this.root)
        return data;
    }
    find(value) {
        var current = this.root;
        while (current) {
            if (current.value === value) return true;
            if (value < current.value) current = current.left;
            else current = current.right;
        }
        return false;
    }
    // Using recursion
    insNodeRec(newNode, startNode) {
        if (newNode.value === startNode.value) return undefined;
        if (newNode.value < startNode.value) {
            if (!startNode.left) {
                startNode.left = newNode;
                return this;
            }
            return this.insNodeRec(newNode, startNode.left);
        } else {
            if (!startNode.right) {
                startNode.right = newNode;
                return this;
            }
            return this.insNodeRec(newNode, startNode.right);
        }
    }
    // Using iteration
    insNodeIter(newNode, startNode) {
        while (true) {
            if (newNode.value === startNode.value) return undefined;
            if (newNode.value < startNode.value) {
                if (!startNode.left) {
                    startNode.left = newNode;
                    return this;
                } else startNode = startNode.left;
            } else {
                if (!startNode.right) {
                    startNode.right = newNode;
                    return this;
                } else startNode = startNode.right;
            }
        }
    }
    insValue(value) {
        var myNode = new Node(value);
        if (!this.root) {
            this.root = myNode;
            return this;
        }
        return this.insNodeIter(myNode, this.root);
    }
}

// A bad way to build, obviously
/*
var tree = new BinarySearchTree();
tree.root = new Node(10)
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
*/

var tree = new BinarySearchTree();
tree.insValue(10)
tree.insValue(6)
tree.insValue(15)
tree.insValue(3)
tree.insValue(8)
tree.insValue(20)
tree.dfs_inorder()
