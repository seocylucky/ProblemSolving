function solution(s) {
  var answer = s.length;

  // 최대 압축할 수 있는 단위 수 => 전체 길이의 1/2까지
  const maxLen_canZip = Math.floor(s.length / 2);

  // 자를 수 있는 단위 => i
  for (let i = 1; i < maxLen_canZip + 1; i++) {
    let compressed = "";
    let prev = s.slice(0, i);
    let count = 1;

    // 단위만큼 증가시키고 이전 문자열과 비교
    for (let j = i; j < s.length; j = j + i) {
      const cur = s.slice(j, i + j);
      // 다음 단위의 문자열이 이전 값과 같을 때 => count + 1
      if (prev === cur) {
        count += 1;
      }
      // 다른 문자열이 왔을 때(압축을 하지 못할 때)
      else {
        // count가 1보다 클 때 => 카운트 숫자와 해당 문자열 붙이기
        if (count > 1) {
          compressed += String(count) + prev;
          prev = cur;
          count = 1;
        }
        // 아니라면? => prev 그대로 붙이기
        else {
          compressed += prev;
          prev = cur;
          count = 1;
        }
      }
    }
    compressed += (count > 1 ? String(count) : "") + prev;
    answer = Math.min(answer, compressed.length);
  }

  return answer;
}
