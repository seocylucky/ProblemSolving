const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);

const [a, b, c, d] = [25, 10, 5, 1];
let aCnt;
let bCnt;
let cCnt;
let dCnt;

for (let i = 0; i < T; i++) {
  let money = parseInt(input[i + 1]);

  aCnt = Math.floor(money / a);
  bCnt = Math.floor((money % a) / b);
  cCnt = Math.floor(((money % a) % b) / c);
  dCnt = Math.floor((((money % a) % b) % c) / d);

  console.log(aCnt, bCnt, cCnt, dCnt);
}
