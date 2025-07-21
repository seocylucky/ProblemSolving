const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const arr = input[1].split(" ").map(Number);
const result = new Array(n).fill(-1); // 오큰수 기본값은 -1
const stack = [];

// 해당 인덱스의 오큰수 구하기
for (let i = 0; i < n; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    const idx = stack.pop();
    result[idx] = arr[i];
  }
  stack.push(i);
}

console.log(result.join(" "));
