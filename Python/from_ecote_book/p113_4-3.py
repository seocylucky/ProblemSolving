n = int(input())
count = 0
arr = []

for i in range(1, n+1):
  for hour in range(1, 60):
    for minute in range(1, 60):
      arr.append(i)
      arr.append(hour)
      arr.append(minute)

      if 3 in arr :
        count += 1
        arr = []

print(count)