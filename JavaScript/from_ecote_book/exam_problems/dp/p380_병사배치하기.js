const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const soldiers = input[1].split(" ").map(Number);
soldiers.reverse();

const dp = Array.from({ length: n + 1 }, () => 1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (soldiers[i] > soldiers[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(n - Math.max(...dp));
