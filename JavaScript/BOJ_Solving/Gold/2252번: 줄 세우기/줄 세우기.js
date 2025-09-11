const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = Array.from({length: n}).fill(0);

for(let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  
}