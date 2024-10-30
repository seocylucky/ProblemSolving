import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())

graph = []
visited = [[[0]*2 for _ in range(M)] for _ in range(N)]

dx = [-1,1,0,0]
dy = [0,0,-1,1]

for i in range(N):
    graph.append(list(map(int, sys.stdin.readline().strip())))

def bfs(x, y, wall_break, graph, visited):
    q = deque()
    q.append((x, y, wall_break,))
    
    visited[x][y][wall_break] = 1
    
    while q:
        x, y, wall_break = q.popleft()
        if x == N-1 and y == M-1:
            return visited[x][y][wall_break]
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue
            if graph[nx][ny] == 0 and visited[nx][ny][wall_break] == 0:
                q.append((nx, ny, wall_break))
                visited[nx][ny][wall_break] = visited[x][y][wall_break] + 1
            if graph[nx][ny] == 1 and wall_break == 1 and visited[nx][ny][wall_break-1] == 0:
                q.append((nx, ny, wall_break-1))
                visited[nx][ny][wall_break-1] = visited[x][y][wall_break] + 1
    
    return -1

print(bfs(0, 0, 1, graph, visited))
