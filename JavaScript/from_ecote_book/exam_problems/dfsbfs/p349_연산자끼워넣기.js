const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

// 최대 계산값, 최소 계산값 초기화
let maxResult = -Infinity;
let minResult = Infinity;

const calculator = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => parseInt(a / b),
];

function dfs(count, result) {
  // 연산자가 모두 채워넣어졌을 시
  if (count === n - 1) {
    maxResult = Math.max(maxResult, result);
    minResult = Math.min(minResult, result);
  } else {
    for (let i = 0; i < operators.length; i++) {
      // 연산자가 나올 수 있는 수가 0 이면 건너뛰기
      if (operators[i] === 0) {
        continue;
      }
      operators[i] -= 1;
      dfs(count + 1, calculator[i](result, nums[count + 1]));
      operators[i] += 1;
    }
  }
}

dfs(0, nums[0]);

console.log(maxResult ? maxResult : 0);
console.log(minResult ? minResult : 0);
