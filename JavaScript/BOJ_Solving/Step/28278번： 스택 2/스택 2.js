const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let commandCnt = null;
  let commandArr = [];
  let lineIdx = 0;

  for await (const line of rl) {
    if (lineIdx === 0) {
      commandCnt = parseInt(line);
    } else {
      commandArr.push(line.split(" ").map(Number));
    }
    lineIdx++;

    if (lineIdx === commandCnt + 1) {
      rl.close();
    }
  }

  solution(commandArr);
  process.exit();
})();

const solution = (commandArr) => {
  let stack = [];
  let result = "";

  for (let i in commandArr) {
    let command = commandArr[i][0];

    if (command === 1) {
      stack.push(commandArr[i][1]);
    } else if (command === 2) {
      if (stack.length > 0) {
        num = stack.pop();
        result += `${num}` + "\n";
      } else {
        result += "-1" + "\n";
      }
    } else if (command === 3) {
      result += `${stack.length}` + "\n";
    } else if (command === 4) {
      if (stack.length === 0) {
        result += "1" + "\n";
      } else {
        result += "0" + "\n";
      }
    } else if (command === 5) {
      if (stack.length > 0) {
        num = stack[stack.length - 1];
        result += `${num}` + "\n";
      } else {
        result += "-1" + "\n";
      }
    }
  }
  console.log(result);
};
