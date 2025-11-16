function solution(enroll, referral, seller, amount) {
  let parent = {};
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  let total = {};
  for (const name of enroll) {
    total[name] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100;
    let top = seller[i];

    while (money > 0 && top != "-") {
      total[top] += money - Math.floor(money / 10);
      top = parent[top];

      money = Math.floor(money / 10);
    }
  }

  return enroll.map((name) => total[name]);
}
