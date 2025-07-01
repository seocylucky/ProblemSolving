const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const scores = input[1].split(" ").map(Number);

const sortedScores = scores.sort((a, b) => b - a);

console.log(sortedScores[k - 1]);
