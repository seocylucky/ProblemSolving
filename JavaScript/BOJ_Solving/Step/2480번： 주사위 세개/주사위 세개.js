const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = null;

  for await (const line of rl) {
    input = line.split(" ").map(Number);

    rl.close();
  }

  solution(input);
  process.exit();
})();

const solution = (input) => {
  let result = 0;
  let countArr = [];
  const inputCountArr = input.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (let key in inputCountArr) {
    countArr.push([key, inputCountArr[key]]);
  }

  countArr.sort((a, b) => {
    return b[1] - a[1];
  });

  let setInput = new Set(input);
  setInput = Array.from(setInput);

  if (setInput.length === 3) {
    result = Math.max(...setInput) * 100;
  }
  if (setInput.length === 2) {
    result = 1000 + parseInt(countArr[0][0]) * 100;
  }
  if (setInput.length === 1) {
    result = 10000 + setInput[0] * 1000;
  }
  console.log(result);
  return result;
};
