T = int(input().strip())
for _ in range(T):
    n = int(input().strip())
 
    if n % 2 == 1:
        print("B")               
        continue
 
    if (n & (n - 1)) != 0:
        print("A")                
        continue
 
    k = n.bit_length() - 1
    print("A" if (k % 2 == 0) else "B")