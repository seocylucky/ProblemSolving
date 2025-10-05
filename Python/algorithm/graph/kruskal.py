# 특정 원소가 속한 집합 찾기
def find(parent, x):
  if parent[x] != x:
    parent[x] = find(parent, parent[x])
  return parent[x]

# 두 원소가 속한 집합 합치기
def union(parent, a, b):
  a = find(parent, a)
  b = find(parent, b)

  if a < b:
    parent[b] = a
  else: parent[a] = b

# 노드의 개수와 간선의 개수(union 연산) 입력 받기
v, e = map(int, input().split())
# 부모 테이블 초기화
parent = [0] * (v+1)

# 모든 간선을 담을 리스트와 최종 비용을 담을 변수
edges = []
result = 0

for i in range(1, v+1):
  parent[i] = i

for i in range(e):
  a, b, cost = map(int, input().split())
  edges.append((cost, a, b)) # 비용순으로 오름차순 하기 위해 다음 순서로 넣기!

# 간선들을 비용 순으로 정렬
edges.sort()

# 간선을 하나씩 확인하며
for edge in edges:
  cost, a, b = edge
  # 사이클이 발생하지 않는 경우 집합에 포함
  if find(parent, a) != find(parent, b):
    union(parent, a, b)
    result += cost
  
print(result)
