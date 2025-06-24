// 연산자 기준 분리 함수
function divideExpression(str) {
  let dividedArr = [];
  let s = "";

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      dividedArr.push(s);
      dividedArr.push(str[i]);
      s = "";
      continue;
    }

    s += str[i];
  }
  dividedArr.push(s);

  return dividedArr;
}

function solution(expression) {
  const expressionsComb = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  let divideds = divideExpression(expression);

  return expressionsComb
    .map((item) => {
      const currentDividedes = [...divideds];

      item.forEach((i) => {
        while (true) {
          if (currentDividedes.includes(i)) {
            const idx = currentDividedes.indexOf(i);

            if (i === "-") {
              const value =
                parseInt(currentDividedes[idx - 1]) - parseInt(currentDividedes[idx + 1]);

              currentDividedes[idx] = value;
              currentDividedes.splice(idx - 1, 1);
              currentDividedes.splice(idx, 1);
            } else if (i === "+") {
              const value =
                parseInt(currentDividedes[idx - 1]) + parseInt(currentDividedes[idx + 1]);

              currentDividedes[idx] = value;
              currentDividedes.splice(idx - 1, 1);
              currentDividedes.splice(idx, 1);
            } else if (i === "*") {
              const value =
                parseInt(currentDividedes[idx - 1]) * parseInt(currentDividedes[idx + 1]);

              currentDividedes[idx] = value;
              currentDividedes.splice(idx - 1, 1);
              currentDividedes.splice(idx, 1);
            }
          } else break;
        }
      });
      return currentDividedes.join("");
    })
    .map((v) => Math.abs(parseInt(v)))
    .sort((a, b) => b - a)[0];
}
