// only works on directed (with positive weights on edges) acyclic (without cycles) graps

// first hash -- graph
let graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;
graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

// second hash -- cost of each node is the time it takes to get from the start node to that node
let costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;



// third hash -- hash table for the parents
let parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

function Dijkstra(graph) {
  let visitedNodes = {};

  let node = find_lowest_cost_node(costs, visitedNodes);

  while (node != null) {
    let cost = costs[node];
    let neighbours = graph[node];
    for (n in neighbours){
        let newCost = cost + neighbours[n];
        if (costs[n] > newCost){
            costs[n] = newCost;
            parents[n] = node;
        }
        
    }
    visitedNodes[node] = true;
    node = find_lowest_cost_node(costs, visitedNodes);
  }
  console.log(costs)

  return Object.values(parents);
}

function find_lowest_cost_node(costs, visitedNodes) {
  let lowest_cost = Infinity,
    lowest_cost_node = null;
  for (node in costs) {
    if (costs[node] < lowest_cost && !(node in visitedNodes)){
        lowest_cost = costs[node];
        lowest_cost_node = node;
    }
  }
 return lowest_cost_node;
}

console.log(Dijkstra(graph))