const Graph = require('./graph')

let customGraph = {
    'A':['B'],
    'B':['C']
}

let graph = new Graph(customGraph)

// BFS
function BFS(graph){
    let queue = [],
        visited = {},
        edges = Object.keys(graph.dict);
    queue.push(edges[0]);

    while (queue.length != 0){
        let vertex = queue.shift();
        console.log(vertex);
        if (!(vertex in visited)){
            visited[vertex] = true;
            let adjacentVertices = graph.dict[vertex];
            for (let i=0; i<adjacentVertices.length; i++){
                if (!(adjacentVertices[i] in visited)){
                    queue.unshift(adjacentVertices[i]);
                }
            }
           
        }
    }

}

BFS(graph)