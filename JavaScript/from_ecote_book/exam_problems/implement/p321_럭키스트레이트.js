const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = input.split("").map(Number);

// n 배열의 길이
const lenN = n.length;

// n 배열의 길이 / 2
const halfIdx = lenN / 2;

// 첫 번째 배열과 두번째 배열 각 합 구하기(인덱스 범위 정해서 합하기)
// 첫 번째 배열 인덱스 범위(0~halfIdx-1), 두 번째 배열 인덱스 범위(halfIdx~lenN-1)
let firstArrSum = 0;
let secondArrSum = 0;

for (let i = 0; i < halfIdx; i++) {
  firstArrSum += n[i];
}

for (let j = halfIdx; j < lenN; j++) {
  secondArrSum += n[j];
}

// 두 합이 같은 값이면, LUCKY 출력 / 다르면, READY 출력
if (firstArrSum === secondArrSum) {
  console.log("LUCKY");
} else console.log("READY");
