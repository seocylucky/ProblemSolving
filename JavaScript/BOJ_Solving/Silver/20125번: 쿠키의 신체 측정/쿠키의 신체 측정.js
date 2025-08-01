const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const arr = [];
let head_idx = [];
let findHead = false;

for (i = 1; i <= n; i++) {
  arr.push(input[i].split(""));
}

// 머리 위치 확인
for (i = 0; i < arr.length; i++) {
  for (const item of arr[i]) {
    if (item === "*") {
      head_idx = [i, arr[i].indexOf("*")];
      findHead = true;
      break;
    }
  }
  if (findHead) {
    break;
  }
}

// 심장 위치
let heart_idx = [head_idx[0] + 1, head_idx[1]];

let left_hands = 0;
let right_hands = 0;
let left_legs = 0;
let right_legs = 0;
let waist = 0;

// 왼쪽 팔 개수
for (let i = heart_idx[1] - 1; i >= 0; i--) {
  if (arr[heart_idx[0]][i] === "*") {
    left_hands += 1;
  } else break;
}

// 오른쪽 팔 개수
for (let i = heart_idx[1] + 1; i < n; i++) {
  if (arr[heart_idx[0]][i] === "*") {
    right_hands += 1;
  } else break;
}

// 허리 개수
for (let i = heart_idx[0] + 1; i < n; i++) {
  if (arr[i][heart_idx[1]] === "*") {
    waist += 1;
    waist_row_idx = i;
  } else break;
}

// 왼쪽 다리 개수
for (let i = waist_row_idx + 1; i < n; i++) {
  if (arr[i][heart_idx[1] - 1] === "*") {
    left_legs += 1;
  } else break;
}

// 오른쪽 다리 개수
for (let i = waist_row_idx + 1; i < n; i++) {
  if (arr[i][heart_idx[1] + 1] === "*") {
    right_legs += 1;
  } else break;
}

// 정답 출력
console.log(heart_idx[0] + 1, heart_idx[1] + 1);
console.log(left_hands, right_hands, waist, left_legs, right_legs);
