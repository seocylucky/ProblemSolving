const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const [N, ...stairs] = input;
const dp = new Array(N).fill(0);

dp[0] = stairs[0];
dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 3] + stairs[i - 1] + stairs[i]);
}

console.log(dp[N - 1]);
