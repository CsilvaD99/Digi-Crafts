greeting = "Hello %s, it is very nice to meet you and your friend %s!"
NameOfUser = input("What is your name? ")
NameOfFrined = input("What is your frined's name? ")

LengthOfName = len(NameOfUser)
LengthOfFriendName = len(NameOfFrined)

if LengthOfName > 0 and LengthOfFriendName > 0:
    print(greeting % (NameOfUser, NameOfFrined))
else:
        print("Ok, I'll ask again some other time.")

donutsConsumed = 0
print("Have you eaten %d donuts." % donutsConsumed)
donutsConsumed = donutsConsumed += 1
print("Have you eaten %d donuts." % donutsConsumed)
donutsConsumed = donutsConsumed + 1
print("Have you eaten %d donuts." % donutsConsumed)
donutsConsumed = donutsConsumed + 1
print("Have you eaten %d donuts." % donutsConsumed)
donutsConsumed = donutsConsumed + 1


