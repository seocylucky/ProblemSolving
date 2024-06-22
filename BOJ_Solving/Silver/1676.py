n = int(input())
result = 1

for i in range(1, n+1) :
    result *= i

result_list = list(str(result))
result_list.reverse()

count = 0

for i in result_list :
    if i != "0" :
        break
    if i == "0" :
        count += 1

print(count)