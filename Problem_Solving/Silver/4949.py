while True :
    a = input()
    d = []

    if a == "." :
        break

    for i in a :
        if i == "[" or i == "(" :
            d.append(i)
        elif i == "]" :
            if len(d) != 0 and d[-1] == "[" :
                d.pop()
            else :
                d.append("]")
                break
        elif i == ")" :
            if len(d) != 0 and d[-1] == "(":
                d.pop()
            else:
                d.append(")")
                break
    if len(d) == 0 :
        print("yes")
    else :
        print("no")