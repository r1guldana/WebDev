def minimum(a, b, c, d):
    return min(a, b, c , d)
nums = list(map(int, input().split()))
print(minimum(*nums))
