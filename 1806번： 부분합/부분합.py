import sys

N, S = map(int, sys.stdin.readline().rstrip().split())
array = list(map(int, sys.stdin.readline().rstrip().split()))

interval_sum = 0
resultArr = []
end = 0

for start in range(N) :
  while end < N and interval_sum < S :
    interval_sum += array[end]
    end += 1
  if interval_sum >= S :
    resultArr.append(end-start)
  interval_sum -= array[start]

if len(resultArr) == 0 :
  print(0)
else : print(min(resultArr))


# import sys

# N, S = map(int, sys.stdin.readline().rstrip().split())
# array = list(map(int, sys.stdin.readline().rstrip().split()))
# cnt = 0

# while S :
#   if len(array) == 0 :
#     break
#   if S in array :
#     array.remove(S)
#     S = 0
#     cnt += 1
#   elif len(array) > 0:
#     S = S - max(array)
#     array.remove(max(array))
#     cnt += 1

# if len(array) == 0 :
#   print(0)
# else : print(cnt)