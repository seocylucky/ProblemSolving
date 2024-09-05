import sys

def dfs(graph, start, visited):
  visited.append(start)
  global count
  count += 1
  for node in graph[start]:
    if node not in visited:
      dfs(graph, node, visited)
  return visited

computerCnt = int(sys.stdin.readline().rstrip())
coupleCnt = int(sys.stdin.readline().rstrip())

graph = [[] for _ in range(computerCnt+1)]
visited = []
count = 0

for _ in range(coupleCnt):
  a, b = map(int, sys.stdin.readline().rstrip().split())
  graph[a].append(b)
  graph[b].append(a)
  
dfs(graph, 1, visited)
print(count-1)