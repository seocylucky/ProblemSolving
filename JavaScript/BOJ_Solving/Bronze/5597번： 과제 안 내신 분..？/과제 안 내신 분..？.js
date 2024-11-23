const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];
let arr = Array.from({ length: 30 }).fill(0);

for (let i of input) {
  arr[i - 1] = i;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    result.push(i + 1);
  }
}

result.sort((a, b) => a - b);

console.log(result.join("\n"));
