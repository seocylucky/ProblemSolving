n = int(input())
a = input()
count = -1
mod = 1234567891
result = 0

for i in a :
    count += 1
    result += (ord(i)-96) * (31**count)

print(result % mod)