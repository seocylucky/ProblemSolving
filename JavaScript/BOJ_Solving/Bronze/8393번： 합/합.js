const input = require("fs").readFileSync("/dev/stdin").toString().trim();

n = parseInt(input);
result = 0;

for (let i = 1; i < n + 1; i++) {
  result += i;
}

console.log(result);
