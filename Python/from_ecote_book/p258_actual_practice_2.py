# 양방향 그래프
# 한 번 이동하는데 시간 1초 걸림
INF = int(1e9)

# n(전체 회사 - 노드의 수), m(경로 - 간선의 수) 입력 받기
n, m = map(int, input().split())

# 연결된 두 회사의 번호 입력 받기
graph = [[INF]*(n+1) for _ in range(n+1)]

# 자기 자신 -> 자기 자신 비용 0으로 초기화
for i in range(1, n+1):
  for j in range(1, n+1):
    if i == j:
      graph[i][j] = 0

# 연결된 a, b 두 회사 정보 입력 받고 서로에게 가는 비용은 1로 초기화
for _ in range(m):
  a, b = map(int, input().split())
  graph[a][b] = 1
  graph[b][a] = 1

# x(최종 목적지)와 k(경유지) 입력 받기
x, k = map(int, input().split())

for k in range(1, n+1):
  for i in range(1, n+1):
    for j in range(1, n+1):
      graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])

distance = graph[1][k] + graph[k][x]

if distance >= INF:
  print(-1)
else : print(distance)