// n개의 부품 보유
// m개 종류의 부품 구매, 부품이 모두 가게에 있는지 확인

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// n 입력
const n = parseInt(input[0]);

// n개의 정수 배열 입력
const n_arr = input[1].split(" ").map(Number);

// m 입력
const m = parseInt(input[2]);

// m개의 정수 배열 입력
const m_arr = input[3].split(" ").map(Number);

// n 배열 정렬
n_arr.sort((a, b) => a - b);

// 이진 탐색 함수 작성
function binary_search(arr, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return null;
}

// m_arr의 각 요소 이진탐색 진행
const result = [];
for (const i of m_arr) {
  if (binary_search(n_arr, i, 0, n_arr.length - 1) !== null) {
    result.push("yes");
  } else {
    result.push("no");
  }
}

// 결과값 출력
console.log(result.join(" "));
