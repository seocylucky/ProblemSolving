const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

const set = new Set();
let str = "";

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    set.add(input.slice(i, j).join(""));
  }
}

console.log(set.size);
