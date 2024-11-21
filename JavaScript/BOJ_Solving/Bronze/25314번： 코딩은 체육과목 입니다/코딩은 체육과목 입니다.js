const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const num = parseInt(input);
let result = "";

for (let i = 0; i < num / 4; i++) {
  result += "long" + " ";
}

console.log(result + "int");
