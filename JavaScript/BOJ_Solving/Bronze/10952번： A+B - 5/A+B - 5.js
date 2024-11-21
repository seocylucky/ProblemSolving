const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let idx = 0;

while (true) {
  let [a, b] = input[idx];

  if (a === 0 && b === 0) {
    break;
  } else {
    console.log(a + b);
    idx++;
    continue;
  }
}
