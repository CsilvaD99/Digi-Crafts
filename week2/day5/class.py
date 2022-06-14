


class user:
    def __init__(self, firstname, Lastname, address)
         self.first = firstname
         self.second = Lastname
         self.adresss = []



class Adress: 
    def __init__(self,street,city,state,zipcode):
        self.street = street
        self.city = city
        self.state = state
        self.zipcode = zipcode


Carlos = user("Carlos","Silva")
adresss = Adress("123 main st", "houston", "texas","77095")

Carlos.adresss.append("123 main st")

print(Carlos.adresss)

