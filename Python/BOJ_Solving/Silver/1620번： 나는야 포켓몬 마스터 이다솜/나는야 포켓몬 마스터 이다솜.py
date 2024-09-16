import sys

N, M = map(int, sys.stdin.readline().split())
pocketmonList = []

for i in range(N):
  pocketmonList.append(sys.stdin.readline().rstrip())
  
for j in range(M):
  inputVal = sys.stdin.readline().rstrip()
  if(inputVal.isdigit()) :
    print(pocketmonList[int(inputVal)-1])
  else :
    print(pocketmonList.index(inputVal)+1)