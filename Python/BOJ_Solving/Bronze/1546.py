n = int(input())

score = list(map(int, input().split(sep=" ")))

max_score = max(score)

result_score = [s / max_score*100 for s in score]

result_avg = sum(result_score) / len(result_score)

print(result_avg)