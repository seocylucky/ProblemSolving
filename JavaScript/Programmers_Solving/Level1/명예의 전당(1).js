const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
  var answer = [];
  let awardStack = [];
  for (i = 0; i < score.length; i++) {
    awardStack.push(score[i]);
    awardStack.sort((a, b) => b - a);
    if (k < awardStack.length) {
      awardStack.pop();
    }
    answer.push(awardStack[awardStack.length - 1]);
  }
  return answer;
}

console.log(solution(k, score));
