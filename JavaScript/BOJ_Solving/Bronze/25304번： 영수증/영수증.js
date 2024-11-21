const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [X] = input[0];
const [cnt] = input[1];
let sum = 0;

for (let i = 2; i < cnt + 2; i++) {
  stuff = input[i];
  sum += stuff[0] * stuff[1];
}

if (sum === X) {
  console.log("Yes");
} else {
  console.log("No");
}
