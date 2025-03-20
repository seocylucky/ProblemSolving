# 무방향그래프(양방향그래프), 모든 마을 연결되어 있음, 연결되어있을 때 인접해있다고 함
# 우수마을끼리는 인접할 수 없음
# 우수마일 - 비우수마을 조합으로 무조건 있어야 함

n = int(input()) # 마을 개수
neighborList = list(map(int, input().split())) # 마을 당 주민 수
townBestCheckList = [0 for i in range(n)]
townArr = [[] for _ in range(n)] # 마을 별 인접한 마을을 담은 리스트
sumNum = 0

for _ in range(1, n): # 인접한 마을 설정
  start, end = map(int, input().split())
  townArr[start-1].append(end)
  townArr[end-1].append(start)

print(townArr)

while neighborList:
  BestMaxNumTown = neighborList.index(max(neighborList))

  if len(townArr[BestMaxNumTown]) != n:
    neighborList.remove(townBestCheckList[BestMaxNumTown])
    for removeList in townArr[BestMaxNumTown
    sumNum += neighborList[BestMaxNumTown]
  
  if not in townArr[BestMaxNumTown]
