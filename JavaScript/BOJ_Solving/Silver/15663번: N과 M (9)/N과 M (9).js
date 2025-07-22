const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const visited = Array.from({ length: nums.length }).fill(false);

let result = "";

function backtracking(selected) {
  if (selected.length === m) {
    result += selected.join(" ") + "\n";
    return;
  }
  let preNumber = -1;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && nums[i] !== preNumber) {
      visited[i] = true;
      backtracking([...selected, nums[i]]);
      visited[i] = false;
      preNumber = nums[i];
    }
  }
}

backtracking([]);

console.log(result);
