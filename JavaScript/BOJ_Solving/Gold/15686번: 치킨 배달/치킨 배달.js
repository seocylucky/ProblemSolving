const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];

for (let idx = 1; idx < n + 1; idx++) {
  graph.push(input[idx].split(" ").map(Number));
}

// 집과 치킨 거리가 작은 3개의 가게로 도시의 치킨 거리의 최솟값 구하기

// 집 좌표 모음
const homes = [];

// 가게 좌표 모음
const restaurants = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 집일 떄,
    if (graph[i][j] === 1) {
      homes.push([i, j]);
    }
    // 치킨 가게일 때
    else if (graph[i][j] === 2) {
      restaurants.push([i, j]);
    }
  }
}

// 치킨진의 M개 조합을 구하기
function combination(arr, n) {
  let combinations = [];

  function dfs(cur, idx) {
    if (cur.length === n) {
      combinations.push([...cur]);
      return;
    }
    for (let i = idx; i < arr.length; i++) {
      cur.push(arr[i]);
      dfs(cur, i + 1);
      cur.pop();
    }
  }
  dfs([], 0);
  return combinations;
}

const restaurants_comb = combination(restaurants, m);

let result = Infinity;

// 각 조합의 치킨 거리 합을 구해서 최소값 선택
for (const comb of restaurants_comb) {
  let cityDist = 0;

  // 해당 치킨 가게 좌표로 부터 모든 집까지의 거리 중 최소값 구하기
  for (const [hx, hy] of homes) {
    let min_from_home_dist = Infinity;

    for (const [x, y] of comb) {
      min_from_home_dist = Math.min(
        min_from_home_dist,
        Math.abs(x - hx) + Math.abs(y - hy)
      );
    }
    cityDist += min_from_home_dist;
    if (cityDist >= result) break;
  }
  if (cityDist < result) result = cityDist;
}

console.log(result);
