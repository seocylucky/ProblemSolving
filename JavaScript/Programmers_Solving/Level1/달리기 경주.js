function solution(players, callings) {
  var answer = [];
  const player_map = new Map();

  for (let i = 0; i <= players.length; i++) {
    player_map[players[i]] = i;
  }

  for (const call of callings) {
    idx = player_map[call];
    temp = players[idx - 1];

    players[idx - 1] = call;
    players[idx] = temp;

    player_map[call] = idx - 1;
    player_map[temp] = idx;
  }

  return players;
}
