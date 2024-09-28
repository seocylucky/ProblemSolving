import sys

n = int(sys.stdin.readline())
arr = [int(sys.stdin.readline()) for _ in range(n)]

stack = []
popList = []
result = []
arrIdx = 0

for i in range(1, n + 1):
    stack.append(i)
    result.append('+')
    
    while stack and stack[-1] == arr[arrIdx]:
        popList.append(stack.pop())
        result.append('-')
        arrIdx += 1

if popList == arr:
    print('\n'.join(result))
else:
    print("NO")
