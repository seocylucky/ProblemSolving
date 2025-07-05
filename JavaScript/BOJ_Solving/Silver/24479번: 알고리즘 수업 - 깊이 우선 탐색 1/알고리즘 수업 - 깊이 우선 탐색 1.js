const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const vertexs = [];
const edges = Array.from({ length: n }, () => []);
const visited = Array.from({ length: n }).fill(0);
let order = 1;

for (let i = 0; i < n; i++) {
  vertexs.push(i + 1);
}

for (let i = 1; i < m + 1; i++) {
  const [v, v2] = input[i].split(" ").map(Number);
  edges[v - 1].push(v2);
  edges[v2 - 1].push(v);
}

for (let i = 0; i < n; i++) {
  edges[i].sort((a, b) => a - b);
}

function dfs(r) {
  visited[r] = order++;

  for (let x of edges[r]) {
    if (!visited[x - 1]) dfs(x - 1);
  }
}

dfs(r - 1);

console.log(visited.join("\n"));
