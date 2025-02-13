n = int(input())

times = []
for _ in range(n):
    a, b = map(int, input().split())
    times.append(a-b)
times.sort()
if n % 2 == 1:
    print(1)
else:
    print(times[n//2] - times[n//2 - 1] + 1)