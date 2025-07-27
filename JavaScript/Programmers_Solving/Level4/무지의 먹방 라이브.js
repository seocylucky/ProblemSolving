function solution(food_times, k) {
  const n = food_times.length;

  const foods = food_times.map((time, index) => ({ time, index: index + 1 }));
  foods.sort((a, b) => a.time - b.time); // time 기준 오름차순 정렬

  let previousTime = 0;
  for (let i = 0; i < n; i++) {
    const diff = foods[i].time - previousTime;

    if (diff !== 0) {
      const spend = diff * (n - i); // 현재 남은 음식 수 × 깎을 시간
      if (k < spend) {
        const rest = foods.slice(i).sort((a, b) => a.index - b.index);
        return rest[k % (n - i)].index;
      }
      k -= spend;
      previousTime = foods[i].time;
    }
  }

  return -1;
}
