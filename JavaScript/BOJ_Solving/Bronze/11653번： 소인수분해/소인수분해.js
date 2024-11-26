const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = parseInt(input);

let result = [];

for (let i = 2; i < n + 1; i++) {
  if (n === 1) {
    break;
  }
  while (n % i === 0) {
    n = n / i;
    result.push(i);
  }
}

console.log(result.join("\n"));
