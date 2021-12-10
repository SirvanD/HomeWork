# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Sunday
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday

days_of_the_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


# 2. My calendar says the first day is Monday...
# Remove Sunday from the first postion and move it to the last position. Use array methods.

days_of_the_week.shift(1)
days_of_the_week.push("Sunday")

# 3. Create a new array of the days of the week:
# you can do this programmatically or just type in manually
# The first inner array should be the weekdays
# The second inner array should be the weekend days
days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday','Sunday']]


# 4. Remove either the weekdays or the weekends
# Your choice...
days_of_the_week.shift()

# 5. Sort the remaining days alphabeticallyc
days_of_the_week[0].sort

# MORE ARRAYS
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.

planeteers[1]

# Add "Heart" to the end of planeteers.
planeteers.push('Heart')

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers.concat(rangers)

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

heroes.sort

# Randomize the contents of heroes using a method. The Ruby documentation might help.
 heroes.shuffle

#  Select a random element from heroes using a method. The Ruby documentation might help.

heroes.sample

# display each hero in a new line on the terminal using the .each method

heroes.each do |hero|
    puts hero
  end 

# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'

# and this 
heroes.each do |hero|

  if hero[0] === "W" 
    puts hero
  end
  
end 







