const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const matrix = [];

for (let i = 1; i < n + 1; i++) {
  matrix.push(input[i].split(" ").map(Number));
}

const dp = Array.from({ length: n }, () => Array.from({ length: n }).fill(Infinity));

for (let i = 0; i < n; i++) {
  // 자기 자신에서 자기 자신을 곱한 경우는 카운트 0으로 처리
  dp[i][i] = 0;
}

// 최소 2개씩 행렬 곱해야하므로 2개부터 n개까지 행렬 곱셈 진행
for (let i = 2; i < n + 1; i++) {
  // j - 시작 인덱스, l - 끝 인덱스
  for (let j = 0; j < n - i + 1; j++) {
    const l = i + j - 1;

    // k - 중간 인덱스
    for (let k = j; k < l; k++) {
      const cnt = matrix[j][0] * matrix[l][1] * matrix[k][1] + dp[j][k] + dp[k + 1][l];

      dp[j][l] = Math.min(cnt, dp[j][l]);
    }
  }
}

console.log(dp[0][n - 1]);
