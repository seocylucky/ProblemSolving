const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N] = input[0];
let xArr = [];
let yArr = [];

for (let i = 1; i < N + 1; i++) {
  let [x, y] = input[i];
  xArr.push(x);
  yArr.push(y);
}

let x = Math.max(...xArr) - Math.min(...xArr);
let y = Math.max(...yArr) - Math.min(...yArr);

console.log(x * y);
