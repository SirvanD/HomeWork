# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Sunday
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday

days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# 2. My calendar says the first day is Monday...
# Remove Sunday from the first postion and move it to the last position. Use array methods.

days_of_the_week.rotate(1) = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


# 3. Create a new array of the days of the week:
# you can do this programmatically or just type in manually

# The first inner array should be the weekdays
# The second inner array should be the weekend days

days_of_the_week = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    ["saturday", "sunday"]]


# 4. Remove either the weekdays or the weekends
# Your choice...

days_of_the_week.shift()
days_of_the_week = [["saturday", "sunday"]]


# 5. Sort the remaining days alphabetically
sortedDays = days_of_the_week.sort 

sortedDays = ["saturday", "sunday"]



# more arrays

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# Access the second value in planeteers.
planeteers[1] = "wind"

# Add "Heart" to the end of planeteers.

planeteers.append("heart") = ["Earth", "Wind", "Captain Planet", "Fire", "Water", "heart"]


# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

heroes = (planeteers + rangers)
heroes = ["Earth",
 "Wind",
 "Captain Planet",
 "Fire",
 "Water",
 "heart",
 "Red",
 "Blue",
 "Pink",
 "Yellow",
 "Black"]

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.
hearoes.sort = ["Black",
"Blue",
"Captain Planet",
"Earth",
"Fire",
"Pink",
"Red",
"Water",
"Wind",
"Yellow",
"heart"]


# Randomize the contents of heroes using a method. The Ruby documentation might help.

heroes.shuffle
= ["Black",
 "Blue",
 "Earth",
 "heart",
 "Wind",
 "Fire",
 "Red",
 "Yellow",
 "Pink",
 "Water",
 "Captain Planet"]


# Select a random element from heroes using a method. The Ruby documentation might help.

heroes.sample = "red"

# display each hero in a new line on the terminal using the .each method

heroes.each { |heroes| print heroes + "\n" } 

# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'

