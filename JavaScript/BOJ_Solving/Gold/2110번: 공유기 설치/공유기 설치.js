// n c 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, c] = input[0].split(" ").map(Number);

const houses = [];

// 집의 좌표 houses 배열 입력 후, 정렬
for (let i = 1; i < n + 1; i++) {
  houses.push(parseInt(input[i]));
}

houses.sort((a, b) => a - b);

let start = 1;
let end = houses[n - 1] - houses[0];
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let value = houses[0];
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (houses[i] >= value + mid) {
      value = houses[i];
      count += 1;
    }
  }
  if (count >= c) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
