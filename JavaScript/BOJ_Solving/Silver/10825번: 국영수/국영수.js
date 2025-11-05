const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);

const total_arr = [];

for (let i = 1; i < n + 1; i++) {
  const member_scores = input[i].split(/\s+/);
  const member = member_scores[0];
  const scores = member_scores.slice(1, 4).map(Number);
  const arr = [member, scores];
  total_arr.push(arr);
}

total_arr.sort((a, b) => {
  if (a[1][0] !== b[1][0]) {
    return b[1][0] - a[1][0];
  }
  if (a[1][1] !== b[1][1]) {
    return a[1][1] - b[1][1];
  }
  if (a[1][2] !== b[1][2]) {
    return b[1][2] - a[1][2];
  }
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
});

console.log(total_arr.map(([name]) => name).join("\n"));
