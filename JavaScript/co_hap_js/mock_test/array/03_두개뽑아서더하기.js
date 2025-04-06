// 권장 시간: 30m, 풀이 시간: 12m 37s

function solution(arr) {
  let sumArr = [];
  let arr2 = [...arr];
  for (let i = 0; i < arr.length; i++) {
    arr2.splice(i, 1);
    for (let j = 0; j < arr2.length; j++) {
      sumArr.push(arr[i] + arr2[j]);
    }
    arr2 = [...arr];
  }
  sumArr = [...new Set(sumArr)].sort((a, b) => a - b);
  return sumArr;
}

console.log(solution([5, 0, 2, 7]));
