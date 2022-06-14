from os import remove
from shutil import which
from typing import List


ListOfTask = []



def addatask():
    taskToAd = input("what would you you like to add to your list? ")
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
    def __str__(self):
        return self.name 





def removal():
    removes = input("do you whant to keep your list as is before you finish your list? y/n ")
    while removes != "n":
        addatask()
    else:
        removeindex = int(input("which index number of the list would you like to remove? "))
        ListOfTask.pop(removeindex)
        print(ListOfTask)
        





choice = ""
while choice != "y":
        addatask()
        choice = input("Are you done with the list? y/n  ")
else:
        removal()











def removal():
    removes = input("do you whant to remove anthing from the list? y/n ")
    while removes != "y":
        continue
    else:
        removeindex = input("which index number of the list would you like to remove? ")
        ListOfTask.pop(removeindex)
        print(ListOfTask)




# class remove:
#     def __init__(self, remove):
#         remove = input("Do you want to keep every thing from the list before your done? y/n ")
#     def removal(self):
#         while remove != "y":
#             whichremove = input("Which index number would you like to delete? ")
#             ListOfTask.pop(whichremove)
#             addatask()
#         else:
#             print(ListOfTask)



            
            

            
    
# def choices():
#     choice = ""
# while choice != "n":
#         addatask()
#         choice = input("Would you like to make/add to a list? y/n  ")
# else:
#     removal()
