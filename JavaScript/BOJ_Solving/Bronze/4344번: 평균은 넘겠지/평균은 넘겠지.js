const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const c = parseInt(input[0]);

for (let i = 0; i < c; i++) {
  const arr = input[i + 1].split(" ").map(Number);
  const scores = arr.splice(1);

  let sum = 0;

  for (let j = 0; j < scores.length; j++) {
    sum += scores[j];
  }

  const avg = Math.round(sum / scores.length).toFixed(3);

  console.log(`${avg}%`);
}
