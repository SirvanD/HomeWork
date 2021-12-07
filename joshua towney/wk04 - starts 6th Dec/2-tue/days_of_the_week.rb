# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Sunday
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday

days_of_the_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

# puts days_of_the_week


# 2. My calendar says the first day is Monday...
# Remove Sunday from the first postion and move it to the last position. Use array methods.

days_of_the_week.shift
days_of_the_week.push("Sunday")

# puts days_of_the_week

# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

new_DOTW = [
    weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    weekend = ["Saturday","Sunday"]
]

# puts new_DOTW

# 4. Remove either the weekdays or the weekends

new_DOTW.pop

# puts new_DOTW


# 5. Sort the remaining days alphabetically

abc_DOTW = new_DOTW[0].sort



# MORE ARRAYS

# Starting with the following array...
# Access the second value in planeteers.
# remember to test your code and use (irb/pry/p)!

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

planeteers[1]

# Add "Heart" to the end of planeteers.

planeteers.push("Heart")

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

heroes = ["Earth", "Wind", "Captain Planet", "Fire", "Water","Red", "Blue", "Pink", "Yellow", "Black"]

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

abc_heroes = heroes.sort

# Randomize the contents of heroes using a method. The Ruby documentation might help.

heroes.shuffle

# Select a random element from heroes using a method. The Ruby documentation might help.

heroes.sample

# display each hero in a new line on the terminal using the .each method

# heroes.each do |hero|
#     puts hero
# end


# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'

heroes.each do |hero|
    if hero.start_with?('W')
        puts hero
    end
end