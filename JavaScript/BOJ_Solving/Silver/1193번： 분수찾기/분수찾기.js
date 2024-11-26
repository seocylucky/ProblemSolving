const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let X = parseInt(input);
let cnt = 1;

let mo = 0;
let ja = 0;
let isJa = false;

while (cnt <= X) {
  if (cnt === 1) {
    mo++;
    ja++;
    cnt++;
  } else {
    if (!isJa) {
      if (ja === 1) {
        mo++;
        isJa = true;
      } else {
        mo++;
        ja--;
      }
      cnt++;
    } else {
      ja++;
      if (mo === 1) {
        isJa = false;
      } else {
        mo--;
      }
      cnt++;
    }
  }
}

const result = [ja, "/", mo];

console.log(result.join(""));
