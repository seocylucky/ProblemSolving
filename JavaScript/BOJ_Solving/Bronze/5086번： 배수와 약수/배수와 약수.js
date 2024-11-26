const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let result = [];

for (let testCase = 0; testCase < input.length; testCase++) {
  let [a, b] = input[testCase];

  if (b % a === 0) {
    result.push("factor");
  } else if (a % b === 0) {
    result.push("multiple");
  } else if (a === 0 && b === 0) {
    continue;
  } else {
    result.push("neither");
  }
}

console.log(result.join("\n"));
