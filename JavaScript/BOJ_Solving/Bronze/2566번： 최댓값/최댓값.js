const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let maxArr = Array.from({ length: 9 }).fill(0);

for (let i = 0; i < 9; i++) {
  maxArr[i] = Math.max(...input[i]);
}

maxNum = Math.max(...maxArr);

maxRowIdx = input.findIndex((row) => row.includes(maxNum));
maxColIdx = input[maxRowIdx].indexOf(maxNum);

console.log(maxNum);
console.log(maxRowIdx + 1, maxColIdx + 1);
