import sys
sys.setrecursionlimit(10000)

def Dfs(x, y, graph, width, height): 
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    for i in range(4): 
        nx = x + dx[i] 
        ny = y + dy[i]
        if 0 <= nx < width and 0 <= ny < height: 
            if graph[ny][nx] == 1:
                graph[ny][nx] = -1
                Dfs(nx, ny, graph, width, height)

T = int(sys.stdin.readline())

for _ in range(T):
    width, height, cnt = map(int, sys.stdin.readline().split())
    graph = [[0]*width for _ in range(height)]
    count = 0
    
    for _ in range(cnt):
        positionX, positionY = map(int, sys.stdin.readline().split())
        graph[positionY][positionX] = 1

    for i in range(width):
        for j in range(height):
            if graph[j][i] == 1:
                Dfs(i, j, graph, width, height)
                count += 1

    print(count)
