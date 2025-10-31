// 균형 잡힌 괄호 문자열의 인덱스 반환
function balanced_idx(p) {
  let count = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      count += 1;
    } else {
      count -= 1;
    }

    if (count === 0) {
      return i;
    }
  }
}

// "올바른 괄호 문자열"인지 판단
function check_proper(p) {
  let count = 0;
  for (const i of p) {
    if (i === "(") {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return count === 0;
}

function solution(p) {
  var answer = "";

  // p가 빈 문자열인 경우, 빈 문자열 반환
  if (p.length === 0) {
    return "";
  }

  // 균형 잡힌 괄호 문자열 인덱스
  let idx = balanced_idx(p);

  let u = p.slice(0, idx + 1);
  let v = p.slice(idx + 1, p.length + 1);

  // u가 "올바른 괄호 문자열"이면, v에 대해 함수를 수행한 결과 반환
  if (check_proper(u)) {
    return (answer = u + solution(v));
  }

  // u가 "올바른 괄호 문자열"이 아니면, 4번 과정 수행
  else {
    const head = "(" + solution(v) + ")";

    const flipped = [...u.slice(1, -1)]
      .map((ch) => (ch === "(" ? ")" : "("))
      .join("");

    return head + flipped;
  }
}
