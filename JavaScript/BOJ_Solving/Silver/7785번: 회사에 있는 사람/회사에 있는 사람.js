const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const map = new Map();

for (let i = 1; i < n + 1; i++) {
  const [name, state] = input[i].split(" ");
  map.set(name, state);
}

const result = [];

for (const a of map) {
  if (a[1] === "enter") {
    result.push(a[0]);
  }
}

result.sort().reverse();
console.log(result.join("\n"));
