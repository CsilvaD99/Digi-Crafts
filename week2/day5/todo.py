ListOfTask = []

def greeting():
    print("HelLo, Ready to plan your day")

def addatask():
    taskToAd = input("what would you you like to add ")
    newtask = items(taskToAd)
    ListOfTask.append(newtask)
    for stuff in ListOfTask:
        print(stuff)
class items:
    def __init__(self, name):
        self.name = name
    def addtask(self, taskToAdd):
        self.task.append(taskToAdd)
    def printTask(self):
        for task in self.printTask:
            print(self.task)
choice = ""
while choice != "n":
        addatask()
        choice = input("Do you want to add more task? y/n  ")
else:
    
    print(items)
















