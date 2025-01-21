n = int(input())
count = 0
arr = []

for i in range(n+1):
  for hour in range(60):
    for minute in range(60):
      beforeArr = str(i) + str(hour)+ str(minute)
      arr = list(beforeArr)

      if '3' in arr :
        count += 1
      arr = []

print(count)