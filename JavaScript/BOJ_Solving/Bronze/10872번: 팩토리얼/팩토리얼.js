let n = require("fs").readFileSync("/dev/stdin").toString().trim();

n = parseInt(n);
let result = 1;

for (let i = n; i > 0; i--) {
  result *= i;
}

console.log(result);
