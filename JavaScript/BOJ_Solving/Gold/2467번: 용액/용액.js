const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = n - 1;
let min_sum = Infinity;
let result = [0, 0];

while (left < right) {
  const sum = arr[left] + arr[right];

  if (min_sum > Math.abs(sum)) {
    min_sum = Math.abs(sum);
    result = [arr[left], arr[right]];
  }
  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(result.join(" "));
