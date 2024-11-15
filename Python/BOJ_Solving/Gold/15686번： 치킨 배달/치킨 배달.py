from itertools import combinations

N, M = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(N)]
houseArr = []
chickenArr = []
minDist = 99999999

for i in range(N):
  for j in range(N):
    if graph[i][j] == 1:
      houseArr.append((i, j))
    if graph[i][j] == 2:
      chickenArr.append((i,j))

combinationList = list(combinations(chickenArr, M))

for combination in combinationList:
  totalDist = 0
  for house in houseArr:
    houseDist = min(abs(house[0] - chicken[0]) + abs(house[1] - chicken[1]) for chicken in combination)
    totalDist += houseDist
  minDist = min(minDist, totalDist)

print(minDist)