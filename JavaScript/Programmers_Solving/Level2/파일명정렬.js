function solution(files) {
  var answer = [];

  // HEAD 사전 순 정렬(대소문자 구분x)
  // HEAD 순서 동급인 경우, NUMBER 순 정렬(앞쪽 연속된 0들 무시)
  // HEAD와 NUMBER 모두 순서 동급인 경우, 원래 입력 순서 유지

  const parsed_arr = files.map((file, idx) => {
    let head = "";
    let number = "";
    let tail = "";
    let i = 0;

    // HEAD 추가
    while (i < file.length && !(file.charCodeAt(i) >= 48 && file.charCodeAt(i) <= 57)) {
      head += file[i];
      i++;
    }

    // NUMBER 추가
    while (
      i < file.length &&
      file.charCodeAt(i) >= 48 &&
      file.charCodeAt(i) <= 57 &&
      number.length < 5
    ) {
      number += file[i];
      i++;
    }

    return {
      head: head.toLowerCase(),
      number: parseInt(number),
      real_file: file,
      idx: idx,
    };
  });

  // console.log(parsed_arr);

  // 정렬
  parsed_arr.sort((a, b) => {
    if (a.head < b.head) return -1;
    if (b.head < a.head) return 1;
    if (a.number < b.number) return -1;
    if (b.number < a.number) return 1;

    return a.idx - b.idx;
  });

  return parsed_arr.map((v) => v.real_file);
}
