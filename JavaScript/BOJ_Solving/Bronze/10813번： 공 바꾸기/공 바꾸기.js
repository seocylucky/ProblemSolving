const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input[0];

let arr = [];

for (let i = 0; i < N; i++) {
  arr.push(i + 1);
}

for (let i = 1; i < M + 1; i++) {
  const [a, b] = input[i];
  let arrA = arr[a - 1];
  let arrB = arr[b - 1];

  arr[a - 1] = arrB;
  arr[b - 1] = arrA;
}

console.log(arr.join(" "));
