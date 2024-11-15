import math

N = int(input())

NArr = list(map(int, str(N)))
counts = [0] * 10

for num in NArr:
    counts[num] += 1

six_nine_count = counts[6] + counts[9]
counts[6] = math.ceil(six_nine_count / 2)
counts[9] = 0

result = max(counts)
print(result)
