const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 학생 수 입력
const n = parseInt(input[0]);
scores = [];

// 학생 이름 - 학생 성적 입력(딕셔너리로)
for (let i = 1; i < n + 1; i++) {
  let [std_name, std_score] = input[i].split(" ");
  std_score = parseInt(std_score);
  scores.push([std_name, std_score]);
}

scores.sort((a, b) => a[1] - b[1]);

const result = [];

for (const students of scores) {
  result.push(students[0]);
}

console.log(result.join(" "));
