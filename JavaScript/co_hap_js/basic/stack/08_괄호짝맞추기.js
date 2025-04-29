// 권장 시간: 30m, 풀이 시간:

function solution(str) {
  strStack = str.split("").map(String);
  let close_str = [];
  let open_str = [];

  while (strStack.length) {
    let pop_str = strStack.pop();

    if (close_str.length === 0 && open_str.length === 0 && pop_str === "(") {
      console.log(false);
      return;
    }

    if (pop_str === ")") {
      close_str.push(pop_str);
    } else if (pop_str === "(") {
      open_str.push(pop_str);
    }

    if (close_str.length === open_str.length) {
      for (let i = 0; i < close_str.length + 1; i++) {
        close_str.pop();
        open_str.pop();
      }
    }
  }

  if ((close_str.length !== 0) | (open_str.length !== 0)) {
    console.log(false);
  } else {
    console.log(true);
  }
}

solution("()())(()");
