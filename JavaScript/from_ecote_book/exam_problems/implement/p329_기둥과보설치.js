// 설치 및 삭제한 구조물이 문제 없는지 판단
function possible(answer) {
  for (let [x, y, installed] of answer) {
    if (installed === 0) {
      // 기둥
      const onGround = y === 0;
      const onBeamLeft = answer.some(
        ([a, b, c]) => a === x - 1 && b === y && c === 1
      );
      const onBeamRight = answer.some(
        ([a, b, c]) => a === x && b === y && c === 1
      );
      const onPillarDown = answer.some(
        ([a, b, c]) => a === x && b === y - 1 && c === 0
      );
      if (onGround || onBeamLeft || onBeamRight || onPillarDown) continue;
      return false;
    }

    if (installed === 1) {
      // 보
      const pillarLeft = answer.some(
        ([a, b, c]) => a === x && b === y - 1 && c === 0
      );
      const pillarRight = answer.some(
        ([a, b, c]) => a === x + 1 && b === y - 1 && c === 0
      );
      const beamLeft = answer.some(
        ([a, b, c]) => a === x - 1 && b === y && c === 1
      );
      const beamRight = answer.some(
        ([a, b, c]) => a === x + 1 && b === y && c === 1
      );
      // 보는 (왼쪽 아래 기둥) 또는 (오른쪽 아래 기둥) 또는 (양쪽이 보로 이어짐)이어야 유효
      if (pillarLeft || pillarRight || (beamLeft && beamRight)) continue; // ← 둘 다 필요하므로 &&
      return false;
    }
  }
  return true; // ← 루프를 모두 통과했을 때만 true
}

function solution(n, build_frame) {
  let answer = [];

  for (let [x, y, installed, how] of build_frame) {
    if (how === 1) {
      // 설치
      answer.push([x, y, installed]);
      if (!possible(answer)) answer.pop();
    } else {
      // 삭제
      answer = answer.filter(
        ([a, b, c]) => !(a === x && b === y && c === installed)
      );
      if (!possible(answer)) answer.push([x, y, installed]);
    }
  }

  // x → y → 설치유형(기둥0, 보1) 오름차순
  answer.sort((A, B) => A[0] - B[0] || A[1] - B[1] || A[2] - B[2]);
  return answer;
}
