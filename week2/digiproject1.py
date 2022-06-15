# 1 class at a minimum
# functions
# for loops
# while loops
# list
# variables
# adding/removing aspects about your class
# the ability to exit the game
# the ability to replay the game
# clean code

# aim for mvp first
def ChooseYourCharacter():
     print("""
    ____________________________
        Chose your Fighter
        1. Ryu
        2. Joe
        3. Judge Lauren
    """)
def CharacterStats():
    
class characters:
    def __init__(self, name, weapon, airAttack, punchAttack, kickAttack, health):
        self.name = name
        self.airAttack = airAttack
        self.punchAttack = punchAttack
        self.kickAttack = kickAttack
        self.health = health
    def ShowWeaponAndHealth(self):
        print()

Ryu = characters("Ryu","fists",10,10,10,100)
Joe = characters("Joe","Keyboard",5,15,10, 80)
Lauren = characters("Jd Lake", "Hammer or Justice",5,20,3,70)











