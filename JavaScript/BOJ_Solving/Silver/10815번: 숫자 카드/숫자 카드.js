const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const had_cards = input[1].split(" ").map(Number);
const m = parseInt(input[2]);
const cardList = input[3].split(" ").map(Number);

const had_card_map = new Map();

for (const x of had_cards) {
  had_card_map.set(x, false);
}

const answerArr = cardList.map((x) => (had_card_map.has(x) ? 1 : 0));

console.log(answerArr.join(" "));
