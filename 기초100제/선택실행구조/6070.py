month = int(input())

if 1 <= month <= 12 :
    if month in [12, 1, 2]: # 뒤 배열에 값이 해당되면 출력
        print("winter")
    elif month in [3, 4, 5]:
        print("spring")
    elif month in [6, 7, 8]:
        print("summer")
    elif month in [9, 10, 11]:
        print("fall")