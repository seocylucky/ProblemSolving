const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const StrArr = input;

const arr = Array.from({ length: 10 }, () => new Array());
let num = 64;

let targetNumArr = [];
let result = 0;

for (let tel = 2; tel < 10; tel++) {
  if (tel === 7 || tel === 9) {
    for (let i = 0; i < 4; i++) {
      num++;
      arr[tel].push(num);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      num++;
      arr[tel].push(num);
    }
  }
  if (num === 89) {
    arr[tel].push(num + 1);
  }
}

for (let i of StrArr) {
  strNum = i.charCodeAt();
  strNumIdx = arr.findIndex((el) => el.includes(strNum));
  targetNumArr.push(strNumIdx);
}

for (let i = 0; i < targetNumArr.length; i++) {
  result += parseInt(targetNumArr[i] + 1);
}
console.log(result);
