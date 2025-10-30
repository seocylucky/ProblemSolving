// 90도 회전
function rotate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].reverse();
  }

  return arr;
}

// 모두 채워졌는지(자물쇠 모든 값이 1인지 체크) => 자물쇠 === 중앙 부분
function check(new_lock) {
  const n = Math.floor(new_lock.length / 3);
  for (let i = n; i < n * 2; i++) {
    for (let j = n; j < n * 2; j++) {
      if (new_lock[i][j] !== 1) {
        return false;
      }
    }
  }
  return true;
}

function solution(key, lock) {
  var answer = true;

  const n = lock.length;
  const m = key.length;

  // 자물쇠 크기를 기존의 3배로 변환하기
  const new_lock = Array.from({ length: n * 3 }, () =>
    Array.from({ length: n * 3 }, () => 0)
  );

  // 확장된 맵 중앙에 기존 자물쇠 두기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      new_lock[n + i][n + j] = lock[i][j];
    }
  }

  // 4가지 방향에 대해 확인
  for (let rotation = 0; rotation < 4; rotation++) {
    // 열쇠 회전
    if (rotation > 0) key = rotate(key);

    for (let x = 0; x < n * 2; x++) {
      for (let y = 0; y < n * 2; y++) {
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < m; j++) {
            new_lock[x + i][y + j] += key[i][j];
          }
        }

        // 키가 자물쇠에 딱 들어맞는가?
        if (check(new_lock)) return true;
        // 딱 들어맞지 않으면 다시 원상복귀
        else {
          for (let i = 0; i < m; i++) {
            for (let j = 0; j < m; j++) {
              new_lock[x + i][y + j] -= key[i][j];
            }
          }
        }
      }
    }
  }

  return false;
}
