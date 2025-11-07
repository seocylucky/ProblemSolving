const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const graph = [];
for (let i = 1; i < n + 1; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let floor = graph.length - 1;
while (floor > 0) {
  for (let i = 0; i < floor; i++) {
    graph[floor - 1][i] += Math.max(graph[floor][i], graph[floor][i + 1]);
  }
  floor -= 1;
}

console.log(graph[0][0]);
