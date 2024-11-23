const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const setArr = [1, 1, 2, 2, 2, 8];

let result = [];

for (let i = 0; i < setArr.length; i++) {
  let need = setArr[i] - input[i];

  result[i] = need;
}

console.log(result.join(" "));
