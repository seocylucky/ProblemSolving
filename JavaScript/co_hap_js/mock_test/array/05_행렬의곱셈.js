function solution(arr1, arr2) {
  const r1 = arr1.length; // 3
  const c1 = arr1[0].length; // 2

  const r2 = arr2.length; // 2
  const c2 = arr2[0].length; // 2

  const resultArr = Array.from(Array(r1), () => Array(c2).fill(0)); // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]

  for (i = 0; i < r1; i++) {
    for (j = 0; j < c2; j++) {
      for (k = 0; k < c1; k++) {
        resultArr[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return resultArr;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
