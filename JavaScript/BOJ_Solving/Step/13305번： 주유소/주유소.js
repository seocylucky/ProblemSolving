const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let cityCnt = 0;
  let roadDist = [];
  let oilList = [];

  let lineIdx = 0;

  for await (const line of rl) {
    if (lineIdx === 0) {
      cityCnt = parseInt(line);
    } else if (lineIdx === 1) {
      roadDist = line.split(" ").map(BigInt);
    } else if (lineIdx === 2) {
      oilList = line.split(" ").map(BigInt);
      rl.close();
    }
    lineIdx++;
  }
  solution(cityCnt, roadDist, oilList);
  process.exit();
})();

const solution = (cityCnt, roadDist, oilList) => {
  result = 0n;
  price = oilList[0];

  for (let i = 0; i < cityCnt - 1; i++) {
    result += roadDist[i] * price;
    if (oilList[i + 1] < price) {
      price = oilList[i + 1];
    }
  }

  console.log(String(result));
};
