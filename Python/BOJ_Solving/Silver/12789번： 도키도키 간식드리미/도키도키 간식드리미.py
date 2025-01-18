# 📌

N = int(input())

arr = list(map(int, input().split()))
waitArr = []

for i in range(N):
    num = arr.pop(0)
    while waitArr and waitArr[-1] == i + 1:
        waitArr.pop()
    if i + 1 != num:
        waitArr.append(num)

while waitArr and waitArr[-1] == len(arr) + 1:
    waitArr.pop()

if len(arr) == 0 and len(waitArr) == 0:
    print("Nice")
else:
    print("Sad")
