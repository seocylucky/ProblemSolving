const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array.from({ length: 21 }, () => 0))
);

function w(a, b, c) {
  if ((a <= 0) | (b <= 0) | (c <= 0)) {
    return 1;
  } else if ((a > 20) | (b > 20) | (c > 20)) {
    return w(20, 20, 20);
  } else if (dp[a][b][c]) {
    return dp[a][b][c];
  } else if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return dp[a][b][c];
  } else {
    dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);

    return dp[a][b][c];
  }
}

while (true) {
  let [a, b, c] = input[idx++].split(" ").map(Number);
  let result = 0;

  if (a === -1 && b === -1 && c === -1) {
    break;
  } else {
    result = w(a, b, c);
    console.log(`w(${a}, ${b}, ${c}) = ${result}`);
  }
}
