const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = null;
  let arr = [];
  let num = null;
  let lineIdx = 0;

  for await (const line of rl) {
    if (lineIdx === 0) {
      input = parseInt(line);
    } else if (lineIdx === 1) {
      arr = line.split(" ").map(Number);
    } else if (lineIdx === 2) {
      num = line;
      rl.close();
    }

    lineIdx++;
  }

  solution(input, arr, num);
  process.exit();
})();

const solution = (input, arr, num) => {
  let result = 0;
  accArr = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  if (accArr[num]) {
    result = accArr[num];
  } else {
    result = 0;
  }
  console.log(result);
};
