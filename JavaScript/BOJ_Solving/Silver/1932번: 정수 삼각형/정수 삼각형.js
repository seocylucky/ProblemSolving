const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const triangles = [];

for (let i = 1; i < n + 1; i++) {
  triangles.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < triangles[i].length; j++) {
    if (j === 0) {
      triangles[i][j] += triangles[i - 1][j];
    } else if (j === triangles[i].length - 1) {
      triangles[i][j] += triangles[i - 1][j - 1];
    } else {
      triangles[i][j] += Math.max(triangles[i - 1][j - 1], triangles[i - 1][j]);
    }
  }
}

let result = 0;

for (let i = 0; i < triangles.length; i++) {
  for (let j = 0; j < triangles[i].length; j++) {
    result = Math.max(result, triangles[i][j]);
  }
}

console.log(result);
