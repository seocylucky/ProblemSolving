const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);

for (let i = 0; i < T; i++) {
  arr = input[i + 1];
  if (arr.length >= 2) {
    console.log(arr[0] + arr[arr.length - 1]);
  } else if (arr.length === 1) {
    console.log(arr[0] + arr[0]);
  }
}
