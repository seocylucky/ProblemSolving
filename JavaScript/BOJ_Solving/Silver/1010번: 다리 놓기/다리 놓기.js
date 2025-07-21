const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);

result = [];

for (let i = 1; i < t + 1; i++) {
  result.push(input[i].split(" ").map(Number));
}

// 팩토리얼 계산 함수 (BigInt로 처리)
function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 조합 계산 함수
function combination(m, n) {
  return factorial(BigInt(m)) / (factorial(BigInt(n)) * factorial(BigInt(m - n)));
}

for (const bridge of result) {
  const [N, M] = bridge;
  console.log(combination(M, N).toString());
}
