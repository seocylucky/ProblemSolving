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

for (let i = 1; i < n + 1; i++) {
  parent[i] = i;
}

for (let i = 1; i < m + 1; i++) {
  const [command, a, b] = input[i].split(" ").map(Number);

  if (command === 0) {
    union(parent, a, b);
  } else if (command === 1) {
    if (find(parent, a) === find(parent, b)) {
      console.log("YES");
    } else console.log("NO");
  }
}
