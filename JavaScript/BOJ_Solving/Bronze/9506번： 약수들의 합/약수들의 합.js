const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let testCase = 0; testCase < input.length; testCase++) {
  let n = input[testCase];
  let arr = [];

  for (let i = 1; i < n / 2 + 1; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  sumNum = arr.reduce((acc, cur) => acc + cur, 0);

  if (n === -1) {
    continue;
  }
  if (sumNum === n) {
    console.log(sumNum, "=", arr.join(" + "));
  } else {
    console.log(n, "is NOT perfect.");
  }
}
