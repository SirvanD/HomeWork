# ### 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Sunday
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
days_of_the_week = Array['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

# ### 2. My calendar says the first day is Monday...
# - Remove Sunday from the first postion and move it to the last position.  Use array methods.
days_of_the_week.push(days_of_the_week.shift)

# ### 3. Create a new array of the days of the week:
# you can do this programmatically or **just type in manually**
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days

days_of_the_week = Array['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
days_of_the_week.push(days_of_the_week.shift)
arr1 = days_of_the_week.take(5)
arr2 = days_of_the_week.drop(5)
newArr = Array[arr1, arr2]
p(newArr)

# ### 4. Remove either the weekdays or the weekends
# ### 5. Sort the remaining days alphabetically

# answer question 4 and 5 together: remove the weekends in the original days_of_the_week array and sort the rest alphabetically
days_of_the_week.shift
days_of_the_week.pop
days_of_the_week.sort

# # more arrays

# Starting with the following array...# > remember to test your code and use (irb/pry/p)!

planeteers = ['Earth', 'Wind', 'Captain Planet', 'Fire', 'Water']

# Access the second value in `planeteers`.
planeteers[1]

# Add "Heart" to the end of `planeteers`.
planeteers.push('Heart')

# Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.
heroes = planeteers.concat rangers

# Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
heroes.sort

# Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
heroes.shuffle!

# Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
heroes.sample

# display each `hero` in a new line on the terminal using the `.each` method
heroes.each { |x| print x, "\n" }

# display each `hero` in a new line on the terminal using the `.each` method only if the hero starts with the letter 'W'
heroes.select { |word| word.start_with?('W') }.each { |x| print x, "\n" }
