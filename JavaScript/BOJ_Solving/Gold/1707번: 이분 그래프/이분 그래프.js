const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const [v, e] = input[idx++].split(" ").map(Number);

  const graph = Array.from({ length: v + 1 }, () => []);

  for (let j = 0; j < e; j++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array(v + 1).fill(0);
  let isYes = true;

  function dfs(node, team) {
    visited[node] = team;

    for (const next of graph[node]) {
      if (!visited[next]) {
        if (!dfs(next, -team)) return false;
      } else if (visited[next] === team) {
        return false;
      }
    }
    return true;
  }

  for (let node = 1; node < v + 1; node++) {
    if (!visited[node]) {
      if (!dfs(node, 1)) {
        isYes = false;
        break;
      }
    }
  }

  console.log(isYes ? "YES" : "NO");
}
