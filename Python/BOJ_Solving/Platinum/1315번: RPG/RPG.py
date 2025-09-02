import sys
from collections import deque

N = int(sys.stdin.readline()); #퀘스트 개수
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)] # N번의 퀘스트의 각 힘 지력 포인트 값 리스트
MAX = 1000

visited = [[False] * (MAX+1) for _ in range(MAX+1)]

# 현재 힘, 지력 상태에서 깰 수 있는 퀘스트 수와 가질 수 있는 포인트 계산
def count_sum(s, i) :
    cnt = 0
    total = 0
    for a, b, p in arr:
        if s >= a or i >= b:
            cnt += 1
            total += p
    return cnt, total

answer = 0
q = deque()
q.append((1, 1))
visited[1][1] = True;

while q:
    s, i = q.popleft()
    cnt, total = count_sum(s, i)
    answer = max(answer, cnt)

    # 포인트 차감
    less_pnt = total - (s -1) - (i - 1)

    if less_pnt < 0 :
        continue

    max_add_s = min(less_pnt, MAX - s)
    for x in range(max_add_s + 1) :
        ns = s + x
        ni = min(MAX, i + (less_pnt - x))
        if not visited[ns][ni] :
            visited[ns][ni] = True
            q.append((ns, ni))
            

print(answer)