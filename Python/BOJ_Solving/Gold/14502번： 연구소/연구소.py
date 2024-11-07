import sys

N, M = map(int, sys.stdin.readline().split())

graph = [list(sys.stdin.readline().rstrip().split()) for _ in range(N)]

print(graph)