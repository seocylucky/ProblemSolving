// n, k 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);

// 배열 a, b 입력
let arr_a = input[1].split(" ").map(Number);
let arr_b = input[2].split(" ").map(Number);

// 배열 a 오름차순 정렬(제일 작은 것부터 스왑 대상)
arr_a = arr_a.sort((a, b) => a - b);

// 배열 b의 내림차순 정렬(제일 큰 것부터 스왑 대상)
arr_b = arr_b.sort((a, b) => b - a);

// k번 동안 arr_a에서 제일 작은 거랑 arr_b에서 제일 큰 거 바꾸기
for (let i = 0; i < k; i++) {
  if (arr_a[i] < arr_b[i]) {
    const [a, b] = [arr_a[i], arr_b[i]];
    arr_a[i] = b;
    arr_b[i] = a;
  } else break;
}

// 배열 a의 모든 요소의 합 출력
let sum = 0;
for (const i of arr_a) {
  sum += i;
}

console.log(sum);
