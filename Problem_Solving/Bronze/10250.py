T = int(input())
RoomNum = 0
floor = 0

for i in range(1, T + 1, 1) :
    H, W, N = input().split()

    H = int(H)
    W = int(W)
    N = int(N)

    if N%H == 0 :
        RoomNum = N // H
        floor = H
    else :
        RoomNum = N // H + 1
        floor = N%H
    print(floor*100 + RoomNum) # 문자열이 아닌 정수로 계산해서 구해야 함! YYXX 형태로!