const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const inorder = input[1].split(" ").map(Number);
const postorder = input[2].split(" ").map(Number);

const result = [];

const findPreorder = (inStart, inEnd, postStart, postEnd) => {
  if (inStart > inEnd || postStart > postEnd) {
    return;
  }

  const root = postorder[postEnd]; // 현재 트리의 루트
  result.push(root); // 루트 값을 결과 배열에 추가

  let rootIndexInInorder;
  // inorder 배열에서 루트의 인덱스를 찾는다
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === root) {
      rootIndexInInorder = i;
      break;
    }
  }

  const leftSubtreeSize = rootIndexInInorder - inStart; // 왼쪽 서브트리의 크기

  // 왼쪽 서브트리
  findPreorder(inStart, rootIndexInInorder - 1, postStart, postStart + leftSubtreeSize - 1);

  // 오른쪽 서브트리
  findPreorder(rootIndexInInorder + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1);
};

1` ,m.
jj  
;`;
// 트리의 루트부터 시작하여 preorder를 찾음
findPreorder(0, n - 1, 0, n - 1);

console.log(result.join(" "));
