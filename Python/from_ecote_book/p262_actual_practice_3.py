import heapq
import sys
input = sys.stdin.readline

# n(도시의 개수), m(통로의 개수), c(출발점)
n, m, start = map(int, input().split())

INF = int(1e9)

# m개의 통로에 대한 정보(x -> y로 가는데 걸리는 비용)입력
graph = [[] for _ in range(n+1)]

for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b, c))

distance = [INF] * (n+1)

def dijkstra(start):
  q = []
  heapq.heappush(q, (0, start))
  distance[start] = 0

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue
    for i in graph[now]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))

dijkstra(start)

count = 0
max_distance = 0

for i in distance:
  if i != INF:
    count += 1
    max_distance = max(max_distance, i)

print(count-1, max_distance)