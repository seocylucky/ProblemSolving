function solution(park, routes) {
  var answer = [];
  let x_park_length = park.length;
  let y_park_length = park[0].length;

  // route 명령 별로 동 서 남 북 몇 칸 이동인지 확인
  // 이동 전, 공원을 벗어나지 않는지 / 장애물을 만나지 않는지 확인 => 해당 되면 바로 다음 명령으로

  for (let i = 0; i < park.length; i++) {
    park[i] = park[i].split("");
  }

  const start = [];

  // S의 위치 찾기
  for (const p of park) {
    for (const p_position of p) {
      if (p_position === "S") {
        start.push(park.indexOf(p));
        start.push(p.indexOf("S"));
      }
    }
  }

  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // routes 명령에 따라 start 이동(이동 조건 확인하기)
  for (const route of routes) {
    let [command, scale] = route.split(" ");

    scale = parseInt(scale);

    let [x, y] = start;

    for (let i = 0; i < scale; i++) {
      if (command === "E") {
        y++;
      } else if (command === "W") {
        y--;
      } else if (command === "S") {
        x++;
      } else if (command === "N") {
        x--;
      }

      // 범위 벗어나는지 체크
      if (x < 0 || y < 0 || x >= x_park_length || y >= y_park_length) {
        console.log(`이동할 수 없습니다! (${x}, ${y}) 위치가 공원을 벗어났습니다.`);
        break;
      }

      // 장애물 체크
      if (park[x][y] === "X") {
        console.log(`장애물 발견! (${x}, ${y}) 위치에서 이동할 수 없습니다.`);
        break;
      }
    }

    // 이동이 가능하면 start 업데이트
    if (x >= 0 && y >= 0 && x < x_park_length && y < y_park_length && park[x][y] !== "X") {
      start[0] = x;
      start[1] = y;
    }
  }

  return start;
}
