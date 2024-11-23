const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let word = [...input];
let word_reverse = [...word].reverse();

if (word.join("") === word_reverse.join("")) {
  console.log(1);
} else {
  console.log(0);
}
