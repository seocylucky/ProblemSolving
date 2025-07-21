let n = require("fs").readFileSync("/dev/stdin").toString().trim();

n = parseInt(n);

console.log(2 ** n);
