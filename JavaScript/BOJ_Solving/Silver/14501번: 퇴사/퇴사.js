const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
let idx = 1;
const info = [];

for (let i = 0; i < n; i++) {
  info.push(input[idx++].split(" ").map(Number));
}

const dp = Array.from({ length: n + 1 }).fill(0);

for (let i = 0; i < n; i++) {
  const [t, p] = info[i];

  dp[i + 1] = Math.max(dp[i + 1], dp[i]);

  if (i + t <= n) {
    dp[i + t] = Math.max(dp[i + t], dp[i] + p);
  }
}

console.log(Math.max(...dp));
