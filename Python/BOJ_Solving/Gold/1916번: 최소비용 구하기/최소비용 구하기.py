import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

# n(도시 - 노드 의 개수) 입력
n = int(input())

# m(버스 - 간선 의 개수) 입력
m = int(input())

# 각 버스의 출발 및 도칙, 주어진 시간을 담을 graph 입력
graph = [[] for _ in range(m+1)]

for i in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b, c))

start, end = map(int, input().split(' '))

# 각 도시의 최단 경로 저장하는 distance 리스트
distance = [INF] * (m+1)

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
        heapq.heappush(q, (distance[i[0]], i[1]))

dijkstra(start)

print(distance[end])
