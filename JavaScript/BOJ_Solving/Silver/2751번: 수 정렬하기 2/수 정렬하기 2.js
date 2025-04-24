let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const [N, ...arr] = input;

function solution() {
  arr.sort((a, b) => a - b);
  console.log(arr.join("\n"));
}

solution(arr);
