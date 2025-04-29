class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let cur = this.root;
      while (true) {
        if (key < cur.val) {
          if (cur.left) {
            cur = cur.left;
          } else {
            cur.left = new Node(key);
            break;
          }
        } else {
          if (cur.right) {
            cur = cur.right;
          } else {
            cur.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let cur = this.root;
    while (cur && cur.val !== key) {
      if (key < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return cur;
  }
}

function solution(lst, searchList) {
  answer = [];

  const bst = new BST();

  for (const key of lst) {
    bst.insert(key);
  }

  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
