const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = input.split("");

const toASCIINum = [];
const result = [];

for (const i of n) {
  const ntoCode = i.charCodeAt();
  toASCIINum.push(ntoCode);
}

toASCIINum.sort((a, b) => a - b);
const alpas = [];
let sum = 0;

for (const j of toASCIINum) {
  // 알파벳 대문자일 때
  if (j >= 65 && j <= 90) {
    alpas.push(String.fromCharCode(j));
  } else {
    sum += parseInt(String.fromCharCode(j));
  }
}

console.log(alpas.join("") + sum);
