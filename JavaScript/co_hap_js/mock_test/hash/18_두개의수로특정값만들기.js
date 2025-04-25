function solution(arr, target) {
  let remains = arr.map((num) => target - num);
  return remains.includes(target);
}

console.log(solution([1, 2, 3, 4, 8], 6));
