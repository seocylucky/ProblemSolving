while True :
    num = input()
    if num == "0":
        break
    is_palindrome = True
    for i in range(len(num) // 2):
        if num[i] != num[len(num) - 1 - i]:
            is_palindrome = False
            break

    if is_palindrome:
        print("yes")
    else:
        print("no")