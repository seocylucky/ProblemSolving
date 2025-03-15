import sys; input = sys.stdin.readline
sys.setrecursionlimit(11111)

# v에서 u로 들어가는 거리와 u의 최대 거리가 같다면 v -> u로 가는 경로가 임계경로
def dfs(u):
    visited[u] = True
    result = 0
    for v, w in reverse_graph[u]:
        if dist[u] == dist[v] + w:
            result += 1
            if not visited[v]:
                result += dfs(v)
    return result

n = int(input()); m = int(input())

graph = [[] for _ in range(n)]
reverse_graph = [[] for _ in range(n)]
ind = [0] * n
for _ in range(m):
    u, v, w = map(int, input().split())
    u -= 1; v -= 1
    graph[u].append((v, w))
    reverse_graph[v].append((u, w))
    ind[v] += 1

s, e = map(int, input().split())
s -= 1; e -= 1

queue = []
for i in range(n):
    if not ind[i]:
        queue.append(i)

dist = [0] * n # 각 정점마다의 최대 거리
while queue:
    u = queue.pop()
    for v, w in graph[u]:
        dist[v] = max(dist[v], dist[u] + w) # 최대 거리는 진입하는 정점들의 거리의 최대값
        ind[v] -= 1
        if not ind[v]: # 모든 진입이 끝났다면 이제 진출해야 한다.
            queue.append(v)
print(dist[e])

# 역추적
visited = [False] * n
print(dfs(e))