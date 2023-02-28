class Heap{
    constructor(size){
        this.list = new Array(size+1).fill(null);
        this.heapSize = 0;
        this.maxSize = size+1;
    }
}

Heap.prototype.peekOfHeap = function(rootNode){
    if (!rootNode){
        return;
    }else{
        return rootNode.list[1];
    }
}

Heap.prototype.sizeOfHeap = function(rootNode){
    if (!rootNode){
        return;
    }else{
        return rootNode.heapSize;
    }
}

Heap.prototype.traverse = function(rootNode){
    if (!rootNode) return;
    let result = [];

    for (let i=1; i<rootNode.heapSize+1; i++){
        result.push(rootNode.list[i]);
    }
    return result;
}

Heap.prototype.heapifyTreeInsert = function(rootNode, index, heapType){
 
    let parentIndex = parseInt(index/2);
    if (index <= 1) return;
    
    if (heapType === 'Min'){
        if (rootNode.list[index] < rootNode.list[parentIndex]){
            // swap
            let temp = rootNode.list[index];
            rootNode.list[index] =  rootNode.list[parentIndex];
            rootNode.list[parentIndex]= temp;
            //[rootNode.list[index], rootNode.list[parentIndex]] = [rootNode.list[parentIndex], rootNode.list[index]];
        }
        this.heapifyTreeInsert(rootNode, parentIndex, heapType);
    }else if (heapType === 'Max'){
        if (rootNode.list[index] > rootNode.list[parentIndex]){
            // swap
            [rootNode.list[index], rootNode.list[parentIndex]] = [rootNode.list[parentIndex], rootNode.list[index]];
        }
        this.heapifyTreeInsert(rootNode, parentIndex, heapType);
    }


}

Heap.prototype.insertNode = function(rootNode, nodeValue, heapType){
    if (rootNode.heapSize + 1 == rootNode.maxSize) return "Binary heap is full";
    rootNode.list[rootNode.heapSize+1] = nodeValue;
    rootNode.heapSize += 1;
    rootNode.heapifyTreeInsert(rootNode, rootNode.heapSize, heapType);
    return "The value has successfully been inserted";
}

let test = new Heap(10)
let nums = [10,100,8,1,-20000,0,-10, 10000, 234, -77];
for (let i=0; i<nums.length; i++){
   test.insertNode(test, nums[i], 'Min')
}

console.log(test.traverse(test))

module.exports = Heap;