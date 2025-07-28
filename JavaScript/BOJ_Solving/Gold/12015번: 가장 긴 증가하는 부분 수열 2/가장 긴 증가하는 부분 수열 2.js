const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const lis = [];

function plusorminus(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

for (let i = 0; i < n; i++) {
  const idx = plusorminus(lis, arr[i]);
  if (idx === lis.length) {
    lis.push(arr[i]);
  } else {
    lis[idx] = arr[i];
  }
}

console.log(lis.length);
