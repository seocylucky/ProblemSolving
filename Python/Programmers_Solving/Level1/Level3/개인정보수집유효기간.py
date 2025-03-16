def solution(today, terms, privacies):
    answer = []
    today_year, today_month, today_day = map(int, today.split("."))

    term_dict = {}
    for term in terms:
        key, value = term.split()
        term_dict[key] = int(value)

    for idx, privacy in enumerate(privacies):
        date, term_type = privacy.split()
        year, month, day = map(int, date.split("."))
        
        month += term_dict[term_type]
        while month > 12:
            year += 1
            month -= 12

        if (year, month, day) <= (today_year, today_month, today_day):
            answer.append(idx + 1)

    return answer
