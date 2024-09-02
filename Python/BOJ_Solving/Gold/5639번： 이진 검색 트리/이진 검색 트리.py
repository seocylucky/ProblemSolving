import sys
sys.setrecursionlimit(10**6)

preOrder = []

def ToPostOrder(array, start, end) :
  if start > end :
    return
  
  root = array[start]
  nodeNum = start + 1

  while nodeNum <= end and array[nodeNum] < root :
    nodeNum += 1
  
  ToPostOrder(array, start+1, nodeNum - 1)
  ToPostOrder(array, nodeNum, end)

  print(root)

while True:
    line = sys.stdin.readline().strip()
    if not line:
        break
    preOrder.append(int(line))

ToPostOrder(preOrder, 0, len(preOrder) - 1)