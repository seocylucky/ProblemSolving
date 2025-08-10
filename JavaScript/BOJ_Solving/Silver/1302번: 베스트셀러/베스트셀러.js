const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const book_map = new Map();

const books = [];

for (let i = 1; i <= n; i++) {
  books.push(input[i]);

  if (book_map.has(input[i])) {
    book_map.set(input[i], book_map.get(input[i]) + 1);
  } else {
    book_map.set(input[i], 1);
  }
}

const maxCount = Math.max(...[...book_map.values()]);

const mostFrequentBooks = [...book_map.entries()]
  .filter(([book, count]) => count === maxCount)
  .map(([book]) => book)
  .sort();

console.log(mostFrequentBooks[0]);
