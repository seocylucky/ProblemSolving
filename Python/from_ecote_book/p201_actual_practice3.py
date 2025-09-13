import sys

# 떡의 개수 n, 요청한 길이 떡 m개 입력
n, m = map(int, sys.stdin.readline().rstrip().split())

# 떡의 개별 높이 배열 입력
heights = list(map(int, sys.stdin.readline().rstrip().split()))

# 떡들의 중간 크기를 구한 후, 설정할 수 있는 높이 최대값 구하기
start = 0
end = max(heights)

result = 0 # 설정할 수 있는 높이 최대값
while start <= end :
    total = 0 # 손님이 가져가는 떡들의 합
    mid = (start + end) // 2

    for x in heights:
        # 중간 길이 보다 각 떡들의 길이가 크면 손님이 가져가는 떡 길이에 추가
        if mid < x :
            total += x - mid
            
    # 현재 손님이 가져갈 수 있는 길이가 요청한 길이보다 작을 시
    if total < m :
        end = mid - 1
    # 현재 손님이 가져갈 수 있는 길이가 요청한 길이보다 클 시
    else :
        result = mid # 일단 mid일 때 정답 업데이트
        start = mid + 1

print(result)