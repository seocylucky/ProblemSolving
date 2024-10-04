import sys

N, W, H, L = map(int, sys.stdin.readline().split())

possibleW = int(W / L)
possibleH = int(H / L)

if possibleH * possibleW <= N :
  print(possibleH * possibleW)
else: print(N)