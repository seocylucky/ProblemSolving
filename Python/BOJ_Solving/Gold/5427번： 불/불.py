from collections import deque

def solution():
    w, h = map(int, input().split())
    fireMap = [list(input().strip()) for _ in range(h)]

    fire = deque()
    sangeun = deque()

    visited = [[False] * w for _ in range(h)]
    fire_time = [[-1] * w for _ in range(h)]  # 불이 도달하는 시간 저장

    # 불과 상근이의 초기 위치 저장
    for i in range(h):
        for j in range(w):
            if fireMap[i][j] == "*":  # 불의 초기 위치
                fire.append((i, j))
                fire_time[i][j] = 0  # 불이 퍼지는 시간 0초로 초기화
            elif fireMap[i][j] == "@":  # 상근이의 초기 위치
                sangeun.append((i, j, 0))  # x좌표, y좌표, 시간
                visited[i][j] = True

    # 불 BFS 수행 - 먼저 확산
    while fire:
        r, c = fire.popleft()
        for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < h and 0 <= nc < w:
                if fireMap[nr][nc] == '.' and fire_time[nr][nc] == -1:
                    fire_time[nr][nc] = fire_time[r][c] + 1
                    fire.append((nr, nc))

    # 🚶‍♂️ 상근이 BFS 수행
    while sangeun:
        r, c, t = sangeun.popleft()

        # 탈출 조건 - 가장자리에 도달하면 탈출 성공
        if r == 0 or r == h - 1 or c == 0 or c == w - 1:
            print(t + 1)
            return

        for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < h and 0 <= nc < w:
                # 방문한 적 없고, 벽이 아니며, 불보다 먼저 도착할 수 있는 경우
                if not visited[nr][nc] and fireMap[nr][nc] == '.':
                    if fire_time[nr][nc] == -1 or fire_time[nr][nc] > t + 1:
                        visited[nr][nc] = True
                        sangeun.append((nr, nc, t + 1))

    print("IMPOSSIBLE")  # 모든 경우에서 탈출 불가능한 경우

# 테스트케이스 개수 입력
TestCase = int(input())
for _ in range(TestCase):
    solution()
