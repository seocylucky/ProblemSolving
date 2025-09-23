// n 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

// 가로 n, 세로 2 직사각형 형태의 바닥이 있다.
// 1*2, 2*1, 2*2 타일로 바닥 채우는 경우의 수 구하기.

// n값에 따른 들어갈 수 있는 경우의 수
const d = Array.from({ length: 1001 }).fill(0);

// 보텀업 방식으로 최적 값 찾기
d[1] = 1;
d[2] = 3;

for (let i = 3; i < n + 1; i++) {
  d[i] = d[i - 1] + d[i - 2] * 2;
}

console.log(d[n] % 796796);
