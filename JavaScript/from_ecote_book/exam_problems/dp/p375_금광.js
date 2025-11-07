const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 테스트케이스
const t = parseInt(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const [n, m] = input[idx++].split(" ").map(Number);
  const nums = input[idx++].split(" ").map(Number);
  const graph = [];
  let slice_start_idx = 0;

  for (let j = 0; j < n; j++) {
    graph.push(nums.splice(slice_start_idx, slice_start_idx + m));
  }

  const dp = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    dp[i][0] = graph[i][0];
  }

  // 탑다운
  for (let y = 1; y < m; y++) {
    for (let x = 0; x < n; x++) {
      // 왼쪽 위에서 오는 경우
      const leftup = x - 1 >= 0 ? dp[x - 1][y - 1] : -Infinity;
      // 왼쪽에서 오는 경우
      const left = dp[x][y - 1];
      // 왼쪽 아래에서 오는 경우
      const leftdown = x + 1 < n ? dp[x + 1][y - 1] : -Infinity;
      dp[x][y] = graph[x][y] + Math.max(left, leftup, leftdown);
    }
  }

  let result = -Infinity;

  for (let r = 0; r < n; r++) {
    result = Math.max(result, dp[r][m - 1]);
  }

  console.log(result);
}
