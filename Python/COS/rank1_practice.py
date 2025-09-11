def solution(scores):

  mans_avg = []

  for man_scores in scores:
    man_scores.sort()
    man_scores.remove(min(man_scores))
    man_scores.remove(max(man_scores))

    mans_avg.append((man_scores[0] + man_scores[1]) // 2)

  return max(mans_avg)

print(solution([[85, 92, 95, 90], [91, 76, 85, 50]]))