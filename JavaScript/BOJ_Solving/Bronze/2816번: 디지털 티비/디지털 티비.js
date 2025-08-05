const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let idx1 = input.indexOf("KBS1");
let idx2 = input.indexOf("KBS2");
idx2 = idx1 > idx2 ? ++idx2 : idx2;

let result = "";

for (let i = 0; i < idx1; i++) {
  result += "1";
}

for (let i = 0; i < idx1; i++) {
  result += "4";
}

for (let i = 0; i < idx2; i++) {
  result += "1";
}

for (let i = 0; i < idx2 - 1; i++) {
  result += "4";
}

console.log(result);
