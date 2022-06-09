#from re import L


#ListOFStudents = ["Amanda" , "Andrea" , "Blake" , "Carlos"]


#ListOFStudents.append("Alex")
#print(ListOFStudents)

#how to add someone in the list above

# Square the numbers in this list
numbers = [1, 2, 3, 4, 5, 6, 7]

# SquaredNumbers = [number ** 2 for number in numbers]
# print(SquaredNumbers)



# Remove all empty strings in this list
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
NewList = []
for name in list1:
    if name != "":
        NewList.append(name)
print(NewList)


# output ["Mike", "Emma", "Kelly", "Brad"]










# Add new item to list after a specified item
list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]

# output [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]


# Replace list's item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]

# output [5, 10, 15, 200, 25, 50, 20]

# Remove all occurrences of a specific item from a list.
list4 = [5, 20, 15, 20, 25, 50, 20]
# output [5, 15, 25, 50]

# Square the numbers in this list
numbers = [1, 2, 3, 4, 5, 6, 7]
# Output [1, 4, 9, 16, 25, 36, 49]

# Remove all empty strings in this list
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
# output ["Mike", "Emma", "Kelly", "Brad"]

# Add new item to list after a specified item
list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
list2[2][2].append(7000)


# output [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]

# Replace list's item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]
# output [5, 10, 15, 200, 25, 50, 20]

# Remove all occurrences of a specific item from a list.
list4 = [5, 20, 15, 20, 25, 50, 20]
if item in list4:
    if item == 20:
        list4
# output [5, 15, 25, 50]



#they are faily flexible on what jp morgan wants

name = "Joe Frasier"
print(name[3])
