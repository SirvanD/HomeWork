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
days_of_the_week.push(days_of_the_week.shift)

# 3. Create a new array of the days of the week:
# you can do this programmatically or just type in manually

# The first inner array should be the weekdays
# The second inner array should be the weekend days

weekdays = days_of_the_week.slice(0,5)
weekends = days_of_the_week.slice(5,2)
new_days_of_the_week = [weekdays, weekends]
# 4. Remove either the weekdays or the weekends
# Your choice...(weekends removed)
new_days_of_the_week.pop
# 5. Sort the remaining days alphabetically
new_days_of_the_week[0].sort
# more arrays
# Starting with the following array...

# remember to test your code and use (irb/pry/p)!

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# Access the second value in planeteers.

# # Your answer here
planeteers[1]
# Add "Heart" to the end of planeteers.

# # Your answer here
planeteers.push("Heart")
# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

# # Your answer here
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heros = planeteers + rangers
p(heros)
# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

# # Your answer here
heros.sort
# Randomize the contents of heroes using a method. The Ruby documentation might help.

# # Your answer here
heros.shuffle
# Select a random element from heroes using a method. The Ruby documentation might help.

# # Your answer here
heros.sample
# display each hero in a new line on the terminal using the .each method

# # Your answer here
heros.each do |hero|
    puts("#{hero}\n")
end
# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'

# # Your answer here
heros.each do |hero|
    if hero.start_with?("W")
        puts("#{hero}\n")
    end
end