num = int(input())
a = list(map(int, input().split(' ')))
b = list(map(int, input().split(' ')))
sum = 0

for i in range(0, num) :
  sum += min(a) * max(b)
  a.remove(min(a))
  b.remove(max(b))

print(sum)