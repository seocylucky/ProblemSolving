from collections import deque

class union_find:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [1] * (n + 1)
        self.size = [1] * (n + 1)

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            if self.rank[root_x] > self.rank[root_y]:
                self.parent[root_y] = root_x
                self.size[root_x] += self.size[root_y]
            elif self.rank[root_x] < self.rank[root_y]:
                self.parent[root_x] = root_y
                self.size[root_y] += self.size[root_x]
            else:
                self.parent[root_y] = root_x
                self.rank[root_x] += 1
                self.size[root_x] += self.size[root_y]

def bfs(graph, start, visited):
    queue = deque([(start, 0)])
    visited[start] = 0

    while queue:
        node, level = queue.popleft()
        for neighbor in graph[node]:
            if visited[neighbor] == -1:
                visited[neighbor] = level + 1
                queue.append((neighbor, level + 1))
            elif (visited[neighbor] % 2) == (level % 2): 
                return True
    return False

def max_count_fn(n, edges):
    uf = union_find(n)
    graph = {i: [] for i in range(1, n + 1)}

    for u, v in edges:
        uf.union(u, v)
        graph[u].append(v)
        graph[v].append(u)

    max_count = 0
    visited = [-1] * (n + 1)
    checked_components = set()

    for node in range(1, n + 1):
        root = uf.find(node)
        if root in checked_components:
            continue
        checked_components.add(root)

        node_count = uf.size[root] 
        if bfs(graph, node, visited):
            max_count += 1
        else: 
            max_count += (node_count + 1) // 2  

    return max_count

N, M = map(int, input().split())
edges = [list(map(int, input().split())) for _ in range(M)]
print(max_count_fn(N, edges))

# from collections import deque

# N, M = map(int, input().split())
# edges = [list(map(int, input().split())) for _ in range(M)]

# def max_independent_set(n, edges):
#     graph = {}
#     for u, v in edges:
#         if u not in graph:
#             graph[u] = []
#         if v not in graph:
#             graph[v] = []
#         graph[u].append(v)
#         graph[v].append(u)

#     visited = [-1] * (n + 1)
#     max_count = 0

#     def bfs(start):
#         queue = deque([start])
#         visited[start] = 0
#         group_counts = [1, 0]
#         is_bipartite = True

#         while queue:
#             node = queue.popleft()
#             for neighbor in graph.get(node, []):
#                 if visited[neighbor] == -1:
#                     visited[neighbor] = 1 - visited[node] 
#                     group_counts[visited[neighbor]] += 1
#                     queue.append(neighbor)
#                 elif visited[neighbor] == visited[node]:
#                     is_bipartite = False

#         return max(group_counts) if is_bipartite else 1

#     for node in range(1, n + 1):
#         if visited[node] == -1:
#             if node not in graph:
#                 max_count += 1
#             else:
#                 max_count += bfs(node)

#     return max_count

# print(max_independent_set(N, edges))


