N = int(input())

A = input().split()

position = [1, 1]

for i in range(len(A)):
  if(A[i] == "R" and 0 < position[1] + 1 <= N):
    position[1] += 1
  elif(A[i] == "L" and 0 < position[1] - 1 <= N):
    position[1] -= 1
  elif(A[i] == "U" and 0 < position[0] - 1 <= N):
    position[0] -= 1
  elif(A[i] == "D" and 0 < position[0] + 1 <= N):
    position[0] += 1
  
print(*position, end=' ')