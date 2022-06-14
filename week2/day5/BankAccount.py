class bank:
    def __init__(self, Account):
        self.Account = Account
        self.balance = 0
    def deposit(self,amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def transfer(self,transfers,transto,amount):
        transfers.withdraw(amount)
        transto.deposit(amount)
    def __str__(self):
        return f"{self.account_number}\n{self.balance}"


        

