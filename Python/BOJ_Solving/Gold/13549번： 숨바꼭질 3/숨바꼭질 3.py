import sys
import heapq

N, K = map(int, sys.stdin.readline().split())

INF = int(1e9)
times = [INF]*100001

def dijkstra(start):
  q = []
  times[start] = 0
  heapq.heappush(q, (0, start))

  while q:
    time, now = heapq.heappop(q)

    if times[now] < time:
      continue
    for a, b in [(now+1, time+1), (now-1, time+1), (now*2, time)]:
      if 0 <= a <= 100000 and times[a] > time:
        times[a] = b
        heapq.heappush(q, (times[a], a))

dijkstra(N)

print(times[K])