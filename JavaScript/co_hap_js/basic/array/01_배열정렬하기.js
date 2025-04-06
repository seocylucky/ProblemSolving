function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([1, -5, 2, 4, 3]));
