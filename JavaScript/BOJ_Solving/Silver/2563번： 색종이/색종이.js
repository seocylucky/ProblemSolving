const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [T] = input[0];
let arr = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; i < T; i++) {
  let [startX, startY] = input[i + 1];
  let [endX, endY] = [startX + 10, startY + 10];

  for (let x = startX; x < endX; x++) {
    for (let y = startY; y < endY; y++) {
      arr[x][y] = 1;
    }
  }
}

let totalArea = arr.flat().reduce((sum, cell) => sum + cell, 0);

console.log(totalArea);
