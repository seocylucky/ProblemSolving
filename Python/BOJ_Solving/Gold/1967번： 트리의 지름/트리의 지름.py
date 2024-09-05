import sys
sys.setrecursionlimit(10**6)

def dfs(node , distance):
  for node_child, cost in graph[node]:
    node_distance = distance + cost
    if visited_distance[node_child] == -1:
      visited_distance[node_child] = node_distance
      dfs(node_child, node_distance)


nodeCnt = int(sys.stdin.readline().rstrip())
graph = [[] for _ in range(nodeCnt+1)]
visited_distance = [-1]*(nodeCnt+1)
visited_distance[1] = 0

for _ in range(nodeCnt-1):
  a, b, weight = map(int, sys.stdin.readline().rstrip().split())
  graph[a].append([b, weight])
  graph[b].append([a, weight])

dfs(1, 0)

farNodeIdx = visited_distance.index(max(visited_distance))
visited_distance = [-1]*(nodeCnt+1)
visited_distance[farNodeIdx] = 0
dfs(farNodeIdx, 0)

print(max(visited_distance))