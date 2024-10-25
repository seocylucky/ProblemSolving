import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())

graph = []

for i in range(N):
  graph.append(list(map(int, sys.stdin.readline().split(''))))

