function solution(triangle) {
  let floor = triangle.length - 1;

  while (floor > 0) {
    for (let i = 0; i < floor; i++) {
      triangle[floor - 1][i] += Math.max(triangle[floor][i], triangle[floor][i + 1]);
    }
    floor -= 1;
  }
  return triangle[0][0];
}
