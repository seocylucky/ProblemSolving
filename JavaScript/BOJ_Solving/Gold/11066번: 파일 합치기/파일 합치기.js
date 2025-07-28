const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 1; i < t + 1; i++) {
  const vol = i * 2 - 1;
  const n = parseInt(input[vol]);
  const arr = input[vol + 1].split(" ").map(Number);

  const sum = Array.from({ length: n + 1 }).fill(0);
  for (let j = 1; j < n + 1; j++) {
    sum[j] = sum[j - 1] + arr[j - 1];
  }

  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }).fill(0));

  for (let len = 2; len < n + 1; len++) {
    for (let start = 1; start + len - 1 < n + 1; start++) {
      const end = start + len - 1;
      dp[start][end] = Infinity;

      for (let k = start; k < end; k++) {
        const cost = dp[start][k] + dp[k + 1][end] + (sum[end] - sum[start - 1]);
        dp[start][end] = Math.min(cost, dp[start][end]);
      }
    }
  }

  console.log(dp[1][n]);
}
