const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [a_cnt, b_cnt] = input[0].split(" ").map(Number);

const a_arr = input[1].split(" ").map(Number);
const b_arr = input[2].split(" ").map(Number);
const intersection = [];

const a_map = new Map();

for (const i of a_arr) {
  a_map.set(i, true);
}

for (const i of b_arr) {
  if (a_map.has(i, true)) intersection.push(i);
}

console.log(a_arr.length - intersection.length + (b_arr.length - intersection.length));
