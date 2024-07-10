import math

a = int(input())
n = list(map(int, input().split()))

count = 0

for i in n:
    is_prime = True
    for j in range(2, int(math.sqrt(i)) + 1): # 2부터 n의 제곱근까지
        if i != 1 and i % j == 0:
            is_prime = False
            break
    if is_prime and i != 1:
        count += 1

print(count)
