// x 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const x = parseInt(input);

// 계산된 결과를 저장하기 위한 dp 테이블
const d = new Array(30001).fill(0);

// dp 보텀업 진행
for (let i = 2; i < x + 1; i++) {
  // 1 빼는 경우
  d[i] = d[i - 1] + 1;

  // 2로 나누는 경우
  if (i % 2 === 0) {
    d[i] = Math.min(d[i], d[Math.floor(i / 2)] + 1);
  }
  // 3으로 나누는 경우
  if (i % 3 === 0) {
    d[i] = Math.min(d[i], d[Math.floor(i / 3)] + 1);
  }
  // 5로 나누는 경우
  if (i % 5 === 0) {
    d[i] = Math.min(d[i], d[Math.floor(i / 5)] + 1);
  }
}

console.log(d[x]);
