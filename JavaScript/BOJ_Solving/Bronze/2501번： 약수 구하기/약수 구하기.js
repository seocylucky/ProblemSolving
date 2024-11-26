const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, k] = input;
let arr = [n];

for (let i = Math.floor(n / 2); i > 0; i--) {
  if (n % i === 0) {
    arr.push(i);
  }
}

arr.reverse();

if (arr[k - 1]) {
  console.log(arr[k - 1]);
} else {
  console.log(0);
}
