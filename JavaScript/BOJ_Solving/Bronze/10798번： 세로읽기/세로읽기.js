const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

let maxLength = 0;
let result = [];

for (let i = 0; i < 5; i++) {
  maxLength = Math.max(input[i].length, maxLength);
}

input.forEach((row) => {
  while (row.length < maxLength) {
    row.push(-1);
  }
});

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i] === -1) {
      result.push("");
    } else {
      result.push(input[j][i]);
    }
  }
}

console.log(result.join(""));
