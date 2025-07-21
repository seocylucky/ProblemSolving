const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const nodes = [];
const map = new Map();
let num = 1;

for (let i = 1; i < n + 1; i++) {
  const arr = input[i].split(" ");
  for (const j of arr) {
    if (j === ".") continue;
    if (!map.has(j)) {
      map.set(j, num++);
    }
  }

  console.log(map);
}

for (const node of map.keys) {
  nodes.push(node);
}

function preorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = `${nodes[idx]}`;
    ret = preorder(nodes, idx * 2 + 1);
    ret = preorder(nodes, idx * 2 + 2);
    return ret;
  }
}

function inorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret = `${nodes[idx]}`;
    ret = inorder(nodes, idx * 2 + 2);
    return ret;
  }
}

function postorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = postorder(nodes, idx * 2 + 1);
    ret = postorder(nodes, idx * 2 + 2);
    ret = `${nodes[idx]}`;
    return ret;
  }
}

const result = [];

result.push([preorder(nodes, 0)]);
result.push([inorder(nodes, 0)]);
result.push([postorder(nodes, 0)]);

console.log(result.join("\n"));
