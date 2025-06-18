const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
let dp = Array.from({ length: n }).fill(0);
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp[i] = arr[i];
  dp[i] = Math.max(dp[i], dp[i - 1] + arr[i]);
}

console.log(Math.max(...dp));
