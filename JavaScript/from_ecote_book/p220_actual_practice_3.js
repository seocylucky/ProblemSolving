// n과 식량 창고 배열 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

// 앞서 계산된 결과를 저장하기 위한 테이블
const dp = Array.from({ length: 100 }).fill(0);

dp[0] = arr[0];
dp[1] = arr[1];

// 보텀업 진행
for (let i = 2; i < n; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
}

console.log(dp[n - 1]);
