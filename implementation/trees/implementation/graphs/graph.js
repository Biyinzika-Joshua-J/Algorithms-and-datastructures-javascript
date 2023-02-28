// graph representations
/*
    matrix
    dictionary
*/

class Graph{
    constructor(dict=null){
        if (!dict){
            dict = {};
        }
        this.dict = dict;
    }
}

Graph.prototype.AddEdge = function(vertex, edge){
    
    if (!this.dict[vertex]){
        this.dict[vertex]=[edge];
    }else{
        this.dict[vertex].push(edge);
    }
  
}

module.exports = Graph;



