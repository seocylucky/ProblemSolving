function solution(schedules, timelogs, startday) {
  var answer = 0;

  let schedules_arr = [];
  let members_success = Array.from({ length: schedules.length }).fill(true);

  for (const schedule of schedules) {
    let schedule_str = schedule.toString().padStart(4, "0").split("");
    let pop_num = schedule_str.pop();
    let prev_num = schedule_str.pop();
    let minute = parseInt(prev_num + pop_num) + 10;

    let hour = schedule_str.join("");
    if (minute >= 60) {
      minute -= 60;
      hour = (parseInt(hour) + 1).toString();
    }
    schedules_arr.push([hour, minute]);
  }

  timelogs.forEach((work_times, idx) => {
    let day = startday;
    const schedule = schedules_arr[idx];

    for (let i = 0; i < work_times.length; i++) {
      if (day === 6 || day === 7) {
        // 주말 skip
        day = (day % 7) + 1;
        continue;
      }

      let time_str = work_times[i].toString().padStart(4, "0").split("");
      let pop_num = time_str.pop();
      let prev_num = time_str.pop();
      const minute = parseInt(prev_num + pop_num);
      const hour = parseInt(time_str.join(""));

      if (
        hour > parseInt(schedule[0]) ||
        (hour === parseInt(schedule[0]) && minute > parseInt(schedule[1]))
      ) {
        members_success[idx] = false;
        break;
      }

      day = (day % 7) + 1;
    }
  });

  for (const state of members_success) {
    if (state === true) {
      answer++;
    }
  }

  return answer;
}
