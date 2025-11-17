const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);
const ugly = [1];

let i2 = 0,
  i3 = 0,
  i5 = 0;

while (ugly.length < n) {
  const next2 = ugly[i2] * 2;
  const next3 = ugly[i3] * 3;
  const next5 = ugly[i5] * 5;

  const next = Math.min(next2, next3, next5);
  ugly.push(next);

  if (next === next2) i2++;
  if (next === next3) i3++;
  if (next === next5) i5++;
}

console.log(ugly[n - 1]);
