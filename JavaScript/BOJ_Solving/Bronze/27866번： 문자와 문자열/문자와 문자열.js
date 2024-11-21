const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let S = "";
  let i = 0;

  let lineIdx = 0;

  for await (const line of rl) {
    if (lineIdx === 0) {
      S = line;
    } else {
      i = parseInt(line);
      rl.close();
    }
    lineIdx++;
  }

  solution(S, i);
  process.exit();
})();

const solution = (S, i) => {
  console.log(S[i - 1]);
};
