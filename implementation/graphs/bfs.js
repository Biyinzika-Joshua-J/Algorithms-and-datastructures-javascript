let graph = {};
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

function isMangoSeller(name){
    return name[name.length-1] === 'm';
}

function bfs(graph){
    let queue = [...graph['you']],
        searched = {};

    while (queue.length != 0){
        let node = queue.shift();
        
        if (!(node in searched)){
            // check if this is the node you looking for
            if (isMangoSeller(node)){
                console.log(`${node} is a mango seller in your network!`)
                return true;
            }
            // check if node has children
            if (graph[node].length != 0){
                let neighbours = [...graph[node]];
                queue = [...queue, ...neighbours];
                searched[node] = true;
            }
        }

    }
    return false;
}

let result = bfs(graph);
console.log(result)