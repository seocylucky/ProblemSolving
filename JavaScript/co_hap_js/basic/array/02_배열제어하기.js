// 권장 시간: 10m, 풀이 시간: 3m 4s

function solution(arr) {
  arr = [...new Set(arr)];
  arr.sort((a, b) => b - a);
  return arr;
}

console.log(solution([2, 1, 1, 3, 2, 5, 4]));
