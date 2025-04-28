function countSort(arr, target) {
  const hashtable = Array.from({ length: target + 1 }).fill(0);

  for (const num of arr) {
    if (num <= target) {
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);

  for (const num of arr) {
    const remains = target - num;

    if (remains !== num && remains <= target && hashtable[remains] === 1) {
      return true;
    }
  }

  return false;
}

console.log(solution([2, 3, 5, 9], 10));
