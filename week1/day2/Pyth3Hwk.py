import random
choice=input("If you're afraid of losing, then you daren't win. Heads or Tails.")

num=random.randint(1,2)

if num==1:
    result="Heads"

elif num==2:
    result="tails"

if choice==result:
    print("Winner Winner Chicken Dinner!")
else:
    print("Ha! Get Rekt! Better luck next time.")













