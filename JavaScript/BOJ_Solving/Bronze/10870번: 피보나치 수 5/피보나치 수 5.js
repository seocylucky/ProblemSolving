const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

function fibonacci(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(n));
