a=int(input())
b=int(input())
for i in range(a, b+1):
    num=int(i**0.5)
    if(num*num==i):
        print(i, end=" ")