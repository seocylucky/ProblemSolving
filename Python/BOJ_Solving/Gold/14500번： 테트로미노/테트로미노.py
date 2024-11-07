import sys

N, M = map(int, sys.stdin.readline().split())

graph = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
visited = [[0]*M for _ in range(N)]
result = 0

blocks = [[(0,1), (0,2), (0,3)], [(1,0), (2,0), (3,0)],
        [(0,1), (1,0), (1,1)],
        [(1,0),(1,1),(2,1)], [(0,-1), (1,-1), (1,-2)],
        [(1,0), (1,-1), (2,-1)],[(0,1), (1,1), (1,2)],
        [(1,0), (2,0), (2,1)], [(0,1), (0,2), (1,0)],
        [(0,1),(1,1), (2,1)], [(0,1), (0,2), (-1,2)],
        [(1,0),(2,0),(2,-1)],[(0,1),(0,2),(1,2)],
        [(1,0),(2,0),(0,1)], [(1,0),(1,1),(1,2)],
        [(1,0),(1,1),(1,-1)], [(1,0),(1,1),(2,0)],
        [(0,-1),(1,0),(0,1)],[(0,1),(-1,1),(1,1)] 
]

def searchBlock(i, j, block) :
    now = graph[i][j]
    for di,dj in block :
        ni, nj = i + di, j + dj
        if 0 <= ni < N and 0<= nj < M :
            now += graph[ni][nj]
        else :
            return 0
    return now

for i in range (N) :
    for j in range (M) :
        for block in blocks:
            now = searchBlock(i,j,block)
            result = max(now, result)

print(result)