const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const background = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  for (let dy = 0; dy < 10; dy++) {
    for (let dx = 0; dx < 10; dx++) {
      background[y + dy][x + dx] = 1;
    }
  }
}

let maxResult = 0;

for (let startRow = 0; startRow < 100; startRow++) {
  const colSum = Array(100).fill(0);
  for (let endRow = startRow; endRow < 100; endRow++) {
    for (let col = 0; col < 100; col++) {
      colSum[col] += background[endRow][col];
    }

    let width = 0;
    let maxWidth = 0;

    for (let col = 0; col < 100; col++) {
      if (colSum[col] === endRow - startRow + 1) {
        width++;
        maxWidth = Math.max(maxWidth, width);
      } else width = 0;
    }
    const height = endRow - startRow + 1;
    maxResult = Math.max(maxResult, maxWidth * height);
  }
}

console.log(maxResult);
