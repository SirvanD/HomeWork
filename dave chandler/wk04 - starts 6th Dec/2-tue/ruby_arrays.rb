# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Sunday
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday

days_of_the_week = %w[Sunday Monday Tuesday Wednesday Thursday Friday Saturday]

# 2. My calendar says the first day is Monday...
# Remove Sunday from the first postion and move it to the last position. Use array methods.

puts(days_of_the_week.append(days_of_the_week.shift))

# 3. Create a new array of the days of the week:
# you can do this programmatically or just type in manually

newDaysOfWeek = [days_of_the_week[0..4], days_of_the_week[5..6]]
p(newDaysOfWeek)

# The first inner array should be the weekdays
# The second inner array should be the weekend days

# 4. Remove either the weekdays or the weekends
# Your choice...
newDaysOfWeek.pop
p(newDaysOfWeek)

# 5. Sort the remaining days alphabetically

newDaysOfWeek = newDaysOfWeek[0].sort
puts(newDaysOfWeek)

# more arrays
# Starting with the following array...

# remember to test your code and use (irb/pry/p)!

planeteers = ['Earth', 'Wind', 'Captain Planet', 'Fire', 'Water']
# Access the second value in planeteers.

# # Your answer here
puts(planeteers[1])

# Add "Heart" to the end of planeteers.

# # Your answer here
planeteers.append('Heart')

# Combine planeteers with
rangers = %w[Red Blue Pink Yellow Black]
# and save the result in a variable called heroes.

# # Your answer here
heroes = planeteers.concat(rangers)
puts(heroes)

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

# # Your answer here
puts(heroes.sort)

# Randomize the contents of heroes using a method. The Ruby documentation might help.

# # Your answer here
heroes = heroes.shuffle
puts("\n #{heroes}")

# Select a random element from heroes using a method. The Ruby documentation might help.

# # Your answer here
puts("\n#{heroes[rand(heroes.length)]}")

# display each hero in a new line on the terminal using the .each method

# # Your answer here
heroes.each { |i| puts(i) }
puts("\n")

# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'

# # Your answer here
heroes.each do |e|
  puts e if e[0] == 'W'
end
