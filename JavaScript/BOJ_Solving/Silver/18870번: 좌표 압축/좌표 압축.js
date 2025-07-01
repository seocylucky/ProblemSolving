const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const arr = input[1].split(" ").map(Number);

const setArr = new Set(arr);
const sortedSetArr = [...setArr].sort((a, b) => a - b);

const sortedMap = new Map();
sortedSetArr.forEach((val, idx) => {
  sortedMap.set(val, idx);
});

const result = arr.map((val) => sortedMap.get(val));

console.log(result.join(" "));
