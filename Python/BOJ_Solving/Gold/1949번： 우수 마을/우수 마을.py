# 무방향그래프(양방향그래프), 모든 마을 연결되어 있음, 연결되어있을 때 인접해있다고 함
# 우수마을끼리는 인접할 수 없음
# 우수마일 - 비우수마을 조합으로 무조건 있어야 함

n = int(input()) # 마을 개수
neighborList = [0] + list(map(int, input().split())) # 마을 당 주민 수
townBestCheckList = [0 for i in range(n)]
townArr = [[] for _ in range(n+1)] # 마을 별 인접한 마을을 담은 리스트
sumNum = 0

for _ in range(n-1): # 인접한 마을 설정
  u, v = map(int, input().split())
  townArr[u].append(v)
  townArr[v].append(u)

print(townArr)

visited = [False] * (n + 1)
dp = [[townArr[i], 0] for i in range(n+1)]

def dfs(node):
    visited[node] = True 

    for child in townArr[node]:
        if visited[child]:
            continue

        dfs(child)
        dp[node][0] += dp[child][1]
        dp[node][1] += max(dp[child][0], dp[child][1])

      
