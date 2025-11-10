from collections import deque

T = int(input().strip())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    q = deque([(x, y)])
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n:
                nd = dist[x][y] + grid[nx][ny]
                if nd < dist[nx][ny]:
                    dist[nx][ny] = nd
                    q.append((nx, ny))

for test_case in range(1, T + 1):
    n = int(input().strip())
    grid = [list(map(int, input().strip())) for _ in range(n)]
    dist = [[10**15] * n for _ in range(n)]                   

    dist[0][0] = grid[0][0]
    bfs(0, 0)

    print(f"#{test_case} {dist[n-1][n-1]}")