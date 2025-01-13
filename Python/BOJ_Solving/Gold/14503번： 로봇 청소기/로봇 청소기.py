N, M = map(int, input().split())
r, c, d = map(int, input().split())
arr = [ list(map(int, input().split())) for _ in range(N)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

cnt = 0
visited = [[False] * M for _ in range(N)]

def dfs(x, y, d):
    global cnt
    if not visited[x][y] and arr[x][y] == 0:
        visited[x][y] = True
        cnt += 1

    for _ in range(4):
        d = (d - 1) % 4
        nx, ny = x + dx[d], y + dy[d]

        if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and arr[nx][ny] == 0:
            dfs(nx, ny, d)
            return  

    bx, by = x - dx[d], y - dy[d]
    if 0 <= bx < N and 0 <= by < M and arr[bx][by] != 1:
        dfs(bx, by, d)

dfs(r, c, d)
print(cnt)
