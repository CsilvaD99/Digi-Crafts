class child:
    def __init__(self, name, hair, eyes, hobbies):
        self.name = name 
        self.hair = hair 
        self.eyes = eyes
        self.hobbies = hobbies




class Parents(child): 
    def __init__(self, name, hair, eyes, hobbies, job):
        super().__init__(name,hair,eyes,hobbies)
        self.job = job






class olderSibling(child):
    def __init__(self, name, hair, eyes, hobbies, ageBenefits):
        super().__init__(name,hair,eyes,hobbies)
        self.ageBenefits = ageBenefits

linda = child("Linda","brown","light brown","AC nails")
mom = Parents("Carlos","black",)

