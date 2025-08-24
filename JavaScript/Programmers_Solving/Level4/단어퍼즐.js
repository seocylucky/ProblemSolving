function solution(strs, t) {
  var answer = 0;

  // strs의 요소들은 무한정으로 사용 가능
  // t를 완성하는 최소 개수 조합 리턴하기

  const dp = Array.from({ length: t.length + 1 }).fill(Infinity);
  dp[0] = 0;

  // console.log(dp)
  for (let i = 1; i < t.length + 1; i++) {
    for (let j = 0; j < strs.length; j++) {
      const str = strs[j];
      const len = str.length;
      if (i >= len && t.substring(i - len, i) === str) {
        dp[i] = Math.min(dp[i], dp[i - len] + 1);
      }
    }
  }

  return dp[t.length] === Infinity ? -1 : dp[t.length];
}
