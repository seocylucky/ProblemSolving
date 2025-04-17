const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (i = 1; i < M + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach((edges) => edges.sort((a, b) => a - b));

function dfs(graph, start) {
  const queue = [start];
  const dfs_visited = [];
  const seen = Array(N + 1).fill(false);

  while (queue.length > 0) {
    const node = queue.pop();

    if (!seen[node]) {
      dfs_visited.push(node);
      seen[node] = true;

      for (let i = graph[node].length - 1; i >= 0; i--) {
        const next = graph[node][i];
        if (!seen[next]) queue.push(next);
      }
    }
  }

  return dfs_visited;
}

function bfs(graph, start) {
  const queue = [start];
  const bfs_visited = Array.from({ length: N + 1 }).fill(false);
  const bfs_visited_data = [];
  bfs_visited[start] = true;

  while (queue.length > 0) {
    node = queue.shift();

    bfs_visited_data.push(node);

    for (const neighbor of graph[node]) {
      if (!bfs_visited[neighbor]) {
        queue.push(neighbor);
        bfs_visited[neighbor] = true;
      }
    }
  }

  return bfs_visited_data;
}

console.log(dfs(graph, V).join(" "));
console.log(bfs(graph, V).join(" "));
