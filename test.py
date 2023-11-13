print('ab cd?ef'.title())
x=5
def feek():
    global x
    x=4

def f2(a,b):
    # global x
    return a+b+x

feek()
total = f2(1,2)
print(total)