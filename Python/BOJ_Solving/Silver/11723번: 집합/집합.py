import sys
input = sys.stdin.readline

m = int(input())

s = set()

for _ in range(m):
  arr = list(input().split())
  command = arr[0]
  
  if command == 'add' :
    s.add(int(arr[1]))
  elif command == 'remove':
    try :
      s.remove(int(arr[1]))
    except :
      pass
  elif command == 'check':
    if int(arr[1]) in s :
      print(1)
    else : print(0)
  elif command == 'toggle' :
    if int(arr[1]) in s :
      s.remove(int(arr[1]))
    else : s.add(int(arr[1]))
  elif command == 'all':
    s = set([i for i in range(1, 21)])
  else : s = set()