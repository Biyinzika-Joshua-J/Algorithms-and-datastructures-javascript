class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// 1. depth first value problem
function depthFirstTraversal(root){ // preorder traversal iteration
    if (!root) return root;
    console.log(root.value);
    depthFirstTraversal(root.left);
    depthFirstTraversal(root.right);
}

function depthFirstTraversalLoop(root){ // preorder traversal iteration
    if (!root) return null;
    let result = [];
    let stack = [root];
    while (stack.length != 0){
        let topStackValue = stack.pop();
        result.push(topStackValue.value);
        if (topStackValue.right != null) stack.push(topStackValue.right);
        if (topStackValue.left != null) stack.push(topStackValue.left);
    }
    return result;
}

// problem 2 - breadth first values
function breadthFirstTraversal(root){
    if (!root) return null;
    let queue = [root];
    let result = [];
    while (queue.length > 0){
        let topValue = queue.shift();
        result.push(topValue.value);
        if (topValue.left != null) queue.push(topValue.left);
        if (topValue.right != null) queue.push(topValue.right);
    }
    return result;
}

// tree includes problem

function treeIncludes(root, value){
    if (!root) return false;
    if (root.value === value) return true;
    return treeIncludes(root.left, value)  || treeIncludes(root.right, value);
}

// tree sum problem
let n1 = new Node(3);
let n2 = new Node(11);
let n3 = new Node(20);
let n4 = new Node(2);
let n5 = new Node(4);
let n6 = new Node(1);

n1.left = n2;
n1.right = n3;
n3.right = n6;
n2.left = n5;
n2.right = n4;

function treeSum(root){
    if (!root) return 0;
    return root.value + sum(root.left) + sum(root.right);
}

// find minimum value in tree
function minValue(root){
    if (!root) return Infinity;
    return Math.min(root.value, minValue(root.left), minValue(root.right));
}

// root to leaf max path total sum
function maxPathSum(root){
    if (!root) return 0;
    return Math.max((root.value + maxPathSum(root.left)), (root.value+maxPathSum(root.right)));
}

// balanced binary tree