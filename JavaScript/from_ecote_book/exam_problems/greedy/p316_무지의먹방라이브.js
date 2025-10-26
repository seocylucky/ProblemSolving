function solution(food_times, k) {
  var answer = 0;

  // 전체 음식을 다 먹는데 걸리는 시간
  let foodTimes_sum = 0;
  for (const time of food_times) {
    foodTimes_sum += time;
  }

  // 음식을 다 먹는데 걸리는 시간이 k초보다 작다면, -1 반환
  if (foodTimes_sum < k) {
    return -1;
  }

  // (time, idx) 로 묶고 time 오름차순 정렬
  const foods = food_times.map((t, i) => ({ time: t, idx: i + 1 }));
  foods.sort((a, b) => a.time - b.time);

  let prev = 0;
  const n = foods.length;

  for (let i = 0; i < n; i++) {
    const diff = foods[i].time - prev;
    if (diff !== 0) {
      const remainCnt = n - i;
      const spend = diff * remainCnt;
      if (k >= spend) {
        k -= spend;
        prev = foods[i].time;
      } else {
        const rest = foods.slice(i).sort((a, b) => a.idx - b.idx);
        const pos = k % rest.length;
        return rest[pos].idx;
      }
    }
  }
  return -1;
}
