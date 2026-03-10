def xor(x, y):
    return x != y
x,y=map(int, input().split())
x, y = bool(x), bool(y)
print(int(xor(x, y)))