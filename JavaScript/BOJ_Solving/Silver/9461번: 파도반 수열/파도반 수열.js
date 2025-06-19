const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

T = input[0];

const dp = new Array({ length: 101 }).fill(0);

dp[0] = 0;
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < 101; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

for (let idx = 1; idx < T + 1; idx++) {
  console.log(dp[input[idx]]);
}
