// n 입력, n개의 포도 양 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const n = input[0];
const podos = [];

for (let i = 1; i < n + 1; i++) {
  podos.push(input[i]);
}

// n번째의 포도주가 가질 수 있는 최대 양 테이블
const d = Array.from({ length: n + 1 }).fill(0);

// 보텀업 방식
d[1] = podos[0];
d[2] = podos[1] + podos[0];

for (let i = 3; i < n + 1; i++) {
  // n-1번일 때의 최대 양이 더 클 때, n-2번쨰까지의 최대값과 하나 건너뛰고 n번째 마실 때, n-3번째까지의 최대 양에서 n-1번째와 n번째 포도 합산한 것 중에 최대값 고르기
  d[i] = Math.max(d[i - 1], d[i - 2] + podos[i - 1], d[i - 3] + podos[i - 2] + podos[i - 1]);
}

console.log(d[n]);
