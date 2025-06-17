const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(String);

const [n, m] = input[0].split(" ").map(Number);
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = trees[trees.length - 1];

let result = Number.MIN_SAFE_INTEGER;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  sum = 0;
  for (let x of trees) {
    if (x > mid) sum += x - mid;
  }

  if (sum >= m) {
    if (mid > result) result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
