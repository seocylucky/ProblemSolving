d = []

for i in range(1, 10, 1) :
    d.append(int(input()))

print(max(d)) # 리스트의 최댓값
print(d.index(max(d))+1) # 리스트이 해당 요소가 몇 번째인지