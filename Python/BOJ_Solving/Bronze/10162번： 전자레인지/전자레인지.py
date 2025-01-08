T = int(input())

arr = [0, 0, 0]

while (T > 0) :
  if T >= 300 :
    T -= 300
    arr[0] += 1
  elif 300 > T >= 60 :
    T -= 60
    arr[1] += 1
  elif 60 > T >= 10 :
    T -= 10
    arr[2] += 1
  else:
    break

if T > 0 :
  print(-1)
else :
  for i in arr:
    print(i, end=' ')