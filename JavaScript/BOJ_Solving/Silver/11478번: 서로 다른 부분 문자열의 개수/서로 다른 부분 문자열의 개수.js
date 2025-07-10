const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

const set = new Set();

for (let i = 0; i < input.length; i++) {
  let str = "";
  for (let j = i; j < input.length; j++) {
    str += input[j];
    set.add(str);
  }
}

console.log(set.size);
