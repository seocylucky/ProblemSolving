# n, k 입력
n, k = map(int, input().split(' '))

# 배열 a, b 입력
arr_a = list(map(int, input().split(' ')))
arr_b = list(map(int, input().split(' ')))

# 배열 a 오름차순 정렬(제일 작은 것부터 스왑 대상)
arr_a = sorted(arr_a)

# 배열 b의 내림차순 정렬(제일 큰 것부터 스왑 대상)
arr_b = sorted(arr_b, reverse=True)

# k번 동안 arr_a에서 제일 작은 거랑 arr_b에서 제일 큰 거 바꾸기
for i in range(k) :
    if arr_a[i] < arr_b[i]:
        a, b = arr_a[i], arr_b[i]
        arr_a[i] = b
        arr_b[i] = a
    else: break

# 배열 a의 모든 요소의 합 출력
print(sum(arr_a))