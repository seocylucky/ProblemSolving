# n개의 부품 보유
# m개 종류의 부품 구매, 부품이 모두 가게에 있는지 확인

import sys

# n 입력
n = int(sys.stdin.readline())

# n개의 정수 배열 입력
n_arr = list(map(int, sys.stdin.readline().split()))
    
# m 입력
m = int(sys.stdin.readline())

# m개의 정수 배열 입력
m_arr = list(map(int, sys.stdin.readline().split()))

# n 배열 정렬
n_arr.sort()

# 이진 탐색 함수 작성
def binary_search(arr, target, start, end):
    while start <= end:
        mid = (end + start) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return None

# m_arr의 각 요소 이진탐색 진행
for i in range(len(m_arr)):
    if binary_search(n_arr, m_arr[i], 0, len(n_arr) - 1) != None:
        print('yes', end=' ')
    else :
        print('no', end=' ')