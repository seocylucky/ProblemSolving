import sys

N, H = map(int, sys.stdin.readline().split())
HArrayOneCnt = [0 for _ in range(H+1)]

for i in range(N):
  scale = int(sys.stdin.readline())
  #석순
  if i % 2 == 0 :
    HArrayOneCnt[0] += 1
    HArrayOneCnt[scale] -= 1
  #종유석
  else :
    HArrayOneCnt[H - scale] += 1

for i in range(1, H):
    HArrayOneCnt[i] += HArrayOneCnt[i - 1]

minCnt = min(HArrayOneCnt[:H])
result = HArrayOneCnt[:H].count(minCnt)

print(minCnt, result)

#   |   |   |
#   |   |
#   |   | |
#   |     |
#   | |   |
#     |   |
# |   |   |

# 3 -1 1 -1 1 -1 1

# 3 2 3 2 3 2 3