a = list(map(str, input().lower()))
word_setList = list(set(a))
word_count = []

for i in word_setList :
    count = a.count(i)
    word_count.append(count)

if word_count.count(max(word_count)) >= 2 :
    print("?")
else : print(word_setList[word_count.index(max(word_count))].upper())


