const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const arr = [];
const nums = input[1].split(" ").map(Number);
let cnt = 1;

while (nums.length > 0 || arr.length > 0) {
  // 현재 꺼내야하는 숫자와 nums의 첫번째 요소가 같은 경우
  if (nums.length > 0 && nums[0] === cnt) {
    nums.shift();
    cnt++;
  }
  // 현재 꺼내야하는 숫자와 arr의 첫번째 요소가 같은 경우
  else if (cnt === arr[arr.length - 1] && arr.length > 0) {
    arr.pop();
    cnt++;
  } else if (nums.length > 0) {
    arr.push(nums.shift());
  } else {
    break;
  }
}

console.log(cnt === n + 1 ? "Nice" : "Sad");
