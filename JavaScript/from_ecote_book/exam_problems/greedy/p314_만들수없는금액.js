const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 동전의 개수 n개
const n = parseInt(input[0]);

// 각 동전의 화폐 단위
const coins = input[1].split(" ").map(Number);

// 각 동전 정렬
coins.sort((a, b) => a - b);

// target을 제일 작은 수인 1로 잡고, 해당 동전이 target보다 크면 만들 수 없으므로 체크하면서 더하기
let target = 1;
for (const x of coins) {
  // target을 만들 수 없을 때
  if (target < x) {
    break;
  }
  target += x;
}

console.log(target);
