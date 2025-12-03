const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [l, c] = input[0].split(" ").map(Number);
const strs = input[1].split(" ");

const moeum = ["a", "e", "i", "o", "u"];
const moeumSet = new Set(moeum);

strs.sort();

const result = [];
const path = [];

function dfs(start, len, vowelCnt, consCnt) {
  if (len === l) {
    if (vowelCnt >= 1 && consCnt >= 2) {
      result.push(path.join(""));
    }
    return;
  }

  for (let i = start; i < c; i++) {
    const ch = strs[i];
    path.push(ch);
    if (moeumSet.has(ch)) {
      dfs(i + 1, len + 1, vowelCnt + 1, consCnt);
    } else {
      dfs(i + 1, len + 1, vowelCnt, consCnt + 1);
    }
    path.pop();
  }
}

dfs(0, 0, 0, 0);

console.log(result.join("\n"));
