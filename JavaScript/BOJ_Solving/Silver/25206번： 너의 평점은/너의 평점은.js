const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const grade = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let subAvgScore = 0;
let sumScore = 0;

for (let i of input) {
  let [sub, score, avg] = i;

  if (avg === "P") {
    continue;
  } else {
    sumScore += Number(score);
    subAvgScore += Number(score) * grade[avg];
  }
}

console.log((subAvgScore / sumScore).toFixed(6));
