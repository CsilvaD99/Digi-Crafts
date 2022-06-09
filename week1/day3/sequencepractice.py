numbers = [ 5 , 3 , 2 , 10 , 15 , 4 ]
Sum = sum(numbers)
print(Sum)

biggestnum = numbers[0]

for number in numbers:
    if number > biggestnum:
        biggestnum = number
print(biggestnum)

smallest = min(numbers)
print(smallest)

for even in numbers:
    if even % 2 == 0:
        print(even,end = " ")



numbers2 = [-5, 3, 5, -7, 0, -2]

result = [numbers2 for numbers2 in numbers2 if numbers2 > 0] or None
print(result)


Mlist= [ 5, 3, 4] 
factor = 5

Muresult = []


for i in Mlist:
    Muresult.append(i * factor)

print(Muresult)
#Mresult = Mresult + [i * factor]

print(Mlist.reverse())
