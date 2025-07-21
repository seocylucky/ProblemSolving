let n = require("fs").readFileSync("/dev/stdin").toString().trim();

n = parseInt(n);

console.log(n * (n - 1));
