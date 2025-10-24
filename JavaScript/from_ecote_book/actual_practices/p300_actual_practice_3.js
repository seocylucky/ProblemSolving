function find(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}

function union(parent, a, b) {
  const x = find(parent, a);
  const y = find(parent, b);

  if (x < y) {
    parent[y] = x;
  } else parent[x] = y;
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const parent = Array(n + 1).fill(0);
const edges = [];
let result = 0;

for (let i = 1; i < n + 1; i++) {
  parent[i] = i;
}

for (let i = 1; i < m + 1; i++) {
  const [a, b, cost] = input[i].split(" ").map(Number);
  edges.push([cost, a, b]);
}

edges.sort((a, b) => a[0] - b[0]);
let biggest = 0;

for (const edge of edges) {
  const [cost, a, b] = edge;
  if (find(parent, a) !== find(parent, b)) {
    union(parent, a, b);
    result += cost;
    biggest = cost;
  }
}

console.log(result - biggest);
