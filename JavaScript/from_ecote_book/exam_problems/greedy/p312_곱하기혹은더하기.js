const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// 각 요소를 숫자를 바꾼 리스트
const s = input.split("").map(Number);

// 계산한 값(최대값), 기본 값 => 맨 앞 숫자
let result = s[0];

// 0이랑 같이 계산할때는 무조건 +
// 1이랑 같이 계산하는 경우에는 무조건 +

for (let i = 1; i < s.length; i++) {
  result = Math.max(result + s[i], result * s[i]);
}

console.log(result);
