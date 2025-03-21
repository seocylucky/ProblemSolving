# 시간 복잡도 N+M
from collections import deque

def solution(n, edge):
    graph = [[] for _ in range(n+1)]
    visited = [-1] * (n+1)
    
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)

    queue = deque([1])
    visited[1] = 0

    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if visited[neighbor] == -1:
                visited[neighbor] = visited[node] + 1
                queue.append(neighbor)

    max_dist = max(visited)
    return visited.count(max_dist)


n = 6
vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]

print(solution(n, vertex))