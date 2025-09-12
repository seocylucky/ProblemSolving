const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const n = input[0];

arr = [];

for (let i = 1; i < n + 1; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => b - a);

console.log(arr.join(" "));
