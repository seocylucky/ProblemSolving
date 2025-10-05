const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const d_increase = Array.from({ length: n }).fill(1);
const d_decrease = Array.from({ length: n }).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      d_increase[i] = Math.max(d_increase[i], d_increase[j] + 1);
    }
  }
}

for (let i = n - 1; i >= 0; i--) {
  for (let j = n - 1; j > i; j--) {
    if (arr[i] > arr[j]) {
      d_decrease[i] = Math.max(d_decrease[i], d_decrease[j] + 1);
    }
  }
}

let result = 0;

for (let i = 0; i < n; i++) {
  result = Math.max(result, d_increase[i] + d_decrease[i] - 1);
}

console.log(result);
