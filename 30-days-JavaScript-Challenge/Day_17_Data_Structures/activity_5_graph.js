// Task 9: Implement a Graph class with methods to add vertices, and edges and perform a breadth first search (BFS)

// Undirected and unweighted graph implementation


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2, weight = 1) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
        this.adjacencyList.get(vertex2).push({ node: vertex1, weight }); // Assuming undirected graph
    }

    bfs(start, end) {
        const queue = [start];
        const visited = new Set();
        const parent = {};

        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (vertex === end) {
                return this.constructPath(parent, start, end);
            }

            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor.node)) {
                    visited.add(neighbor.node);
                    parent[neighbor.node] = vertex;
                    queue.push(neighbor.node);
                }
            });
        }

        return null; // Path not found
    }

    constructPath(parent, start, end) {
        const path = [end];
        let current = end;

        while (current !== start) {
            current = parent[current];
            path.unshift(current);
        }

        return path;
    }
}



// Task 10: Use the Graph class to represent a simple netwrok and perform BFS to find the shortest path between nodes 


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'D', 7);
graph.addEdge('C', 'E', 3);
graph.addEdge('D', 'E', 1);

const shortestPath = graph.bfs('A', 'E');
console.log('Shortest path:', shortestPath);