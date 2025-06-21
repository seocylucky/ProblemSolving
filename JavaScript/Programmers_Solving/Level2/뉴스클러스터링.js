function solution(str1, str2) {
  var answer = 0;

  const str1List = str1.split(" ");
  const str2List = str2.split(" ");

  let idx = 0;
  let str1_arr = new Array();
  let str2_arr = new Array();

  for (const str of str1List) {
    for (let i = 0; i < str.length - 1; i++) {
      const first = str[i].toUpperCase();
      const second = str[i + 1].toUpperCase();
      if (
        !(
          65 <= first.charCodeAt() &&
          first.charCodeAt() <= 90 &&
          65 <= second.charCodeAt() &&
          second.charCodeAt() <= 90
        )
      )
        continue;
      else {
        const s = first + second;
        str1_arr.push(s);
      }
    }
  }

  for (const str of str2List) {
    for (let i = 0; i < str.length - 1; i++) {
      const first = str[i].toUpperCase();
      const second = str[i + 1].toUpperCase();
      if (
        !(
          65 <= first.charCodeAt() &&
          first.charCodeAt() <= 90 &&
          65 <= second.charCodeAt() &&
          second.charCodeAt() <= 90
        )
      )
        continue;
      else {
        const s = first + second;
        str2_arr.push(s);
      }
    }
  }

  const countMap1 = new Map();
  const countMap2 = new Map();

  str1_arr.forEach((item) => {
    countMap1.set(item, (countMap1.get(item) || 0) + 1);
  });

  str2_arr.forEach((item) => {
    countMap2.set(item, (countMap2.get(item) || 0) + 1);
  });

  // 교집합, 합집합 계산
  let intersection = 0;
  let union = 0;

  const allKeys = new Set([...countMap1.keys(), ...countMap2.keys()]);

  allKeys.forEach((key) => {
    const count1 = countMap1.get(key) || 0;
    const count2 = countMap2.get(key) || 0;

    intersection += Math.min(count1, count2);
    union += Math.max(count1, count2);
  });

  if (union === 0) return 65536;

  answer = Math.floor((intersection / union) * 65536);
  return answer;
}
