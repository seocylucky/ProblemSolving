let [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

a = BigInt(a);
b = BigInt(b);

console.log((a + b).toString());
