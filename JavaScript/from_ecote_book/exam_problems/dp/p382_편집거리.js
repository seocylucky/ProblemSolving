const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let a = input[0];
let b = input[1];

function edit_dist(str1, str2) {
  n = str1.length;
  m = str2.length;

  dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );

  for (let i = 1; i < n + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j < m + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[n][m];
}

console.log(edit_dist(a, b));
