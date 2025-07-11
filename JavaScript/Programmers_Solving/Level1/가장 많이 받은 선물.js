function solution(friends, gifts) {
  var answer = 0;

  // 서로 선물을 주고 받을 시, 더 많이 준 사람이 다음 달에 선물 하나 받음
  // 두 사람이 선물을 주고 받을 기록이 없거나 같을 때, 선물 지수 큰 사람이 작은 사람에게 선물 하나 받음, 선물 지수도 같으면 그냥 무시
  // 선물 지수(이번 달까지 자신이 친구들에게 준 선물 - 받은 선물의 수)
  // 다음 달에 선물 가장 많이 받은 사람의 받을 선물의 수 출력

  const member_map = new Map();
  const present_nums = Array.from({ length: friends.length }).fill(0);
  const recieved_present_arr = Array.from({ length: friends.length }).fill(0);

  for (const friend of friends) {
    // 각 멤버별 각 멤버들한테 선물 받은 배열 맵에 저장
    member_map.set(friend, Array.from({ length: friends.length }).fill(0));
  }

  for (const gift of gifts) {
    const [sender, reciever] = gift.split(" ");
    const reciever_idx = friends.indexOf(reciever);

    const sender_arr = member_map.get(sender);
    sender_arr[reciever_idx]++;
    member_map.set(sender, sender_arr);
  }

  console.log(member_map);

  // 각 멤버별 선물 지수 계산
  for (const friend of friends) {
    let receive_cnt = 0;
    let send_cnt = 0;

    for (const cnt of member_map.get(friend)) {
      send_cnt += cnt;
    }

    for (const [other_friend, send_list] of member_map) {
      const idx = friends.indexOf(friend);
      receive_cnt += send_list[idx];
    }

    present_nums[friends.indexOf(friend)] = send_cnt - receive_cnt;
  }

  // 선물 받는 사람 결정
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue; // 자기 자신 제외

      const a_to_b = member_map.get(friends[i])[j];
      const b_to_a = member_map.get(friends[j])[i];

      if (a_to_b > b_to_a) {
        recieved_present_arr[i] += 1;
      } else if (a_to_b < b_to_a) {
        recieved_present_arr[j] += 1;
      } else {
        if (present_nums[i] > present_nums[j]) {
          recieved_present_arr[i] += 1;
        } else if (present_nums[i] < present_nums[j]) {
          recieved_present_arr[j] += 1;
        }
        // 같으면 무시
      }
    }
  }

  answer = Math.max(...recieved_present_arr) / 2;
  return answer;
}
