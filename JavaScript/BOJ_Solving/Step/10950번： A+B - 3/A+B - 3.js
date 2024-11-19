const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = null;
  let arr = [];

  for await (const line of rl) {
    if (!input) {
      input = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
    }

    rl.close();
  }

  solution(arr);
  process.exit();
})();

const solution = (arr) => {
  for (let i in arr) {
    console.log(arr[i][0] + arr[i][1]);
  }
};
