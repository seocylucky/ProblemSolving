const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sums = Array.from({ length: n - k + 1 }).fill(0);

let sum = 0;
for (let i = 0; i < k; i++) {
  sum += arr[i];
}
sums[0] = sum;

for (let i = 1; i < n - k + 1; i++) {
  sum += arr[i + k - 1] - arr[i - 1];
  sums[i] = sum;
}

console.log(Math.max(...sums));
