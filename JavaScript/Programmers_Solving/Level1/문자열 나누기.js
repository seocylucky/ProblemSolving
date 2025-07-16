function solution(s) {
  var answer = 0;

  let x_cnt = 0;
  let other_cnt = 0;

  while (s) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[0]) {
        x_cnt += 1;
      } else {
        other_cnt += 1;
      }

      if (x_cnt === other_cnt) {
        answer += 1;
        s = s.slice(i + 1);
        break;
      }
    }

    if (x_cnt !== other_cnt) {
      answer += 1;
      break;
    }
  }
  return answer;
}
