const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);
let arr = [];
let count = 0;

function hanoi(n, start, end, sub) {
  count++;
  if (n === 1) {
    arr.push(`${start} ${end}`);
    return;
  }
  hanoi(n - 1, start, sub, end);
  arr.push(`${start} ${end}`);
  hanoi(n - 1, sub, end, start);
}

hanoi(n, 1, 3, 2);

console.log(`${count}\n` + arr.join("\n"));
