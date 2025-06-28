const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [r, s] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i < r + 1; i++) {
  graph.push(input[i].split(""));
}

let maxDepth = 0;
const visited = Array.from({ length: 26 }).fill(0);
const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function dfs(start, depth) {
  maxDepth = Math.max(maxDepth, depth);

  for (let i = 0; i < 4; i++) {
    const nx = start[0] + move[i][0];
    const ny = start[1] + move[i][1];

    if (0 <= nx && nx < r && 0 <= ny && ny < s) {
      const alpa = graph[nx][ny];
      const alpaNum = alpa.charCodeAt() - 65;

      if (!visited[alpaNum]) {
        visited[alpaNum] = 1;
        dfs([nx, ny], depth + 1);
        visited[alpaNum] = 0;
      }
    }
  }
}

const startAlpaNum = graph[0][0].charCodeAt() - 65;
visited[startAlpaNum] = 1;

dfs([0, 0], 1);

console.log(maxDepth);
