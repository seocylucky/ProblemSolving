const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

// 0으로 뒤집을 때 카운트와, 1로 뒤집을 때 카운트
let count = [0, 0];

let cur = input[0];

for (let i = 1; i < input.length; i++) {
  // 현재 연속된 숫자와 i번째 숫자가 같을 때

  // 마지막 요소일 때 => 해당 숫자의 카운트 +1
  if (cur === input[i]) {
    if (i === input.length - 1) {
      count[input[i]] += 1;
    }
    continue;
  }

  // 현재 연속된 숫자와 i번째의 숫자가 다를 때 => cur번째 count +1, cur을 현재 i번째 값으로 교체
  if (cur !== input[i]) {
    count[cur] += 1;
    cur = input[i];
  }
}

// 두 카운트 중 작은 걸로 결과 출력
console.log(Math.min(...count));
