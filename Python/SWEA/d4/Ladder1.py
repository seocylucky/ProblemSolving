for tc in range(1, 11):
    _ = int(input().strip())

    board = []
    for _ in range(100):
        line = input().strip()
        if ' ' in line:
            board.append(list(map(int, line.split())))
        else:
            board.append(list(map(int, line))) 

    r = 99
    c = board[99].index(2)

    while r > 0:
        if c - 1 >= 0 and board[r][c - 1] == 1:
            while c - 1 >= 0 and board[r][c - 1] == 1:
                c -= 1
            r -= 1
        elif c + 1 < 100 and board[r][c + 1] == 1:
            while c + 1 < 100 and board[r][c + 1] == 1:
                c += 1
            r -= 1
        else:
            r -= 1

    print(f"#{tc} {c}")