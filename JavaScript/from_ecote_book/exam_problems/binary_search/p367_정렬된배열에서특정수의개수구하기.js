const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, x] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

function lowerBound(arr, x) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] >= x) end = mid;
    else start = mid + 1;
  }

  return start;
}

function upperBound(arr, x) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > x) end = mid;
    else start = mid + 1;
  }
  return start;
}

function countOccurrences(arr, x) {
  return upperBound(arr, x) - lowerBound(arr, x);
}

const result = countOccurrences(nums, x);

console.log(result === 0 ? -1 : result);
