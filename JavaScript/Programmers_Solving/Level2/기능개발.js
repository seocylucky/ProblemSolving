// 시간 복잡도 N제곱ㅠㅠ

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution(progresses, speeds) {
  var answer = [];
  let remains = [];
  let possibles_days = new Queue();
  let result = [];

  for (const progress of progresses) {
    remains.push(100 - progress);
  }

  for (let i = 0; i < progresses.length; i++) {
    let remain = remains[i];
    let speed = speeds[i];

    if (remain % speed === 0) {
      possibles_days.push(remain / speed);
    } else {
      possibles_days.push(Math.floor(remain / speed) + 1);
    }
  }

  while (possibles_days.front < possibles_days.items.length) {
    const current = possibles_days.pop();
    let count = 1;

    while (
      possibles_days.front < possibles_days.items.length &&
      possibles_days.items[possibles_days.front] <= current
    ) {
      possibles_days.pop();
      count++;
    }

    result.push(count);
  }

  return result;
}

// 다음은 시간 복잡도 N 코드
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
