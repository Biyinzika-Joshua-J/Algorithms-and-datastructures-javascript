class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}

// individual node class in a linked list
class Node{
    constructor(value=null){
        this.value = value;
        this.next = null;
    }
}

// nodes can be inserted at the beginning of the list
// nodes can be inserted in the middle of the list
// nodes can be inserted at the end of the list
LinkedList.prototype.insert = function (value, areaOfInsertion=0){
    
    let valueToInsert = new Node(value);
    // if head is null
    if (this.head === null){
        head = valueToInsert;
        tail = valueToInsert;
        return this.head;
    }
    // at the beginning
    if (areaOfInsertion === 0){
        valueToInsert.next = this.head;
        this.head = valueToInsert;
    }
    // in the middle
    if (areaOfInsertion > 0){
        let steps = 1,
            current = this.head;
        while (steps <= areaOfInsertion && current != null){
            current = current.next;
            steps++;
        }
        let next = !current?null:current.next;
        valueToInsert.next = next;
        current.next = valueToInsert;
        this.head = current;
    }
     // at the end
     if (areaOfInsertion === -1){

     }



     return this.head;

}

LinkedList.prototype.printList = function (){
    let current = this.head,
        list = ``;
    while (current != null){
        list += `${current}=>`;
        current = current.next;
    }
    list += `${current}`;
    console.log(list);
}

// initializing single linked list
let list = new LinkedList();
let values = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<values.length; i++){
    list.insert(values[i]);
}

list.printList();