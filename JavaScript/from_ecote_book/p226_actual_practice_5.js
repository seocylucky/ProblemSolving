// n, m, 각 n개의 화폐 가치 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const values = [];

for (let i = 1; i < n + 1; i++) {
  values.push(parseInt(input[i]));
}

// 해당 화폐 가치를 만들 수 있는 화폐의 수 테이블
const d = Array.from({ length: m + 1 }).fill(10001);

// 0원은 화폐를 하나도 사용하지 않으므로 0개
d[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = values[i]; j < m + 1; j++) {
    d[j] = Math.min(d[j], d[j - values[i]] + 1);
  }
}

if (d[m] === 10001) {
  console.log(-1);
} else {
  console.log(d[m]);
}
