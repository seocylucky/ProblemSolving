const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const words = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let result = input;

words.forEach((word) => {
  result = result.split(word).join("x");
});

console.log(result.length);
