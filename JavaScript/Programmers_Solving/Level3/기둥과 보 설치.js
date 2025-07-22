const structures = [];

// 해당 구조물이 유효한지 체크
function isValid([x, y, what]) {
  if (what === 0) {
    // 기둥: 바닥 위, 기둥 위, 보 끝
    return (
      y === 0 ||
      structures.some(([nx, ny, w]) => nx === x && ny === y - 1 && w === 0) ||
      structures.some(([nx, ny, w]) => nx === x && ny === y && w === 1) ||
      structures.some(([nx, ny, w]) => nx === x - 1 && ny === y && w === 1)
    );
  } else {
    // 보: 한쪽 아래에 기둥, 또는 양쪽에 보
    return (
      structures.some(([nx, ny, w]) => nx === x && ny === y - 1 && w === 0) ||
      structures.some(([nx, ny, w]) => nx === x + 1 && ny === y - 1 && w === 0) ||
      (structures.some(([nx, ny, w]) => nx === x - 1 && ny === y && w === 1) &&
        structures.some(([nx, ny, w]) => nx === x + 1 && ny === y && w === 1))
    );
  }
}

// 설치 함수
function install(x, y, what) {
  const temp = [x, y, what];
  structures.push(temp);
  if (!structures.every(isValid)) {
    structures.pop(); // 설치 후 전체 유효성 위반 시 롤백
  }
}

// 삭제 함수
function remove(x, y, what) {
  const idx = structures.findIndex(([nx, ny, w]) => nx === x && ny === y && w === what);
  if (idx === -1) return;

  const removed = structures.splice(idx, 1)[0]; // 임시 제거
  if (!structures.every(isValid)) {
    structures.push(removed); // 유효성 위반 시 복구
  }
}

function solution(n, build_frame) {
  for (const [x, y, what, isInstall] of build_frame) {
    if (isInstall === 1) {
      install(x, y, what);
    } else {
      remove(x, y, what);
    }
  }

  // 정렬: x 오름차순 → y 오름차순 → 구조물 종류 오름차순
  return structures.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}
