const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [m, n] = input;
let arr = [];

for (let startNum = m; startNum < n + 1; startNum++) {
  if (startNum < 2) continue;
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(startNum); i++) {
    if (startNum % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    arr.push(startNum);
  }
}

arr.sort((a, b) => a - b);

if (arr.length > 0) {
  let arrSum = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(arrSum);
  console.log(arr[0]);
} else {
  console.log(-1);
}
