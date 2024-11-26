const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = parseInt(input);

console.log((2 ** N + 1) ** 2);
