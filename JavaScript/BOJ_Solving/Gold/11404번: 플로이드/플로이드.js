const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const m = +input.shift();
const buses = input.map((row) => row.split(" ").map(Number));

const adjList = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => Infinity)
);

for (let i = 0; i < n + 1; i++) {
  adjList[i][i] = 0;
}

for (const [a, b, c] of buses) {
  adjList[a][b] = Math.min(adjList[a][b], c);
}

for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (adjList[i][j] > adjList[i][k] + adjList[k][j]) {
        adjList[i][j] = adjList[i][k] + adjList[k][j];
      }
    }
  }
}

for (let i = 1; i < n + 1; i++) {
  result = "";
  for (let j = 1; j < n + 1; j++) {
    if (adjList[i][j] === Infinity) result += "0 ";
    else result += adjList[i][j] + " ";
  }
  console.log(result.trim());
}
