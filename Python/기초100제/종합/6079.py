n = 0
result = 0
input_num = int(input())

for i in range(1, input_num + 1):
    if n < input_num:
        n = i + n
        result = i

print(result)