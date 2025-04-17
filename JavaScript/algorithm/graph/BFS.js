function bfs(graph, start, visited) {
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }
}

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

const visited = Array(9).fill(false);

bfs(graph, 1, visited);
