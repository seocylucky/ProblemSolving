const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let max_length = 0;

for (let i = 1; i < arr.length; i++) {
  let cur = 0;
  if (arr[i] - arr[i - 1] > 0) {
    cur++;
  } else {
    max_length = Math.max(cur, max_length);
  }
}

console.log(max_length);
