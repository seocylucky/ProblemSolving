const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 모험가 수 n 입력
const n = parseInt(input[0]);
// 각 모험가의 공포도 값 배열
const scares = input[1].split(" ").map(Number);

// 그룹 수
let result = 0;
// 현재 그룹의 모합가 수 설정
let count = 0;

// 오름차순 정렬
scares.sort((a, b) => a - b);

// 모험가 돌면서, 현재 그룹에 속한 모험가 수가 해당 모헙가의 공포도 이상일 때, 그룹 추가하고 다시 모험가 수 리셋
for (const scare of scares) {
  count += 1;
  if (count >= scare) {
    result += 1;
    count = 0;
  }
}

console.log(result);
