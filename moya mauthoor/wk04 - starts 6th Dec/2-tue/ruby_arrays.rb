# 1. Create an array of the days of the week

days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# 2. My calendar says the first day is Monday...

days_of_the_week.push(days_of_the_week.shift)

# 3. Create a new array of the days of the week:

new_days_of_the_week = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]]

# 4. Remove either the weekdays or the weekends
new_days_of_the_week.pop

# 5. Sort the remaining days alphabetically
alphabetised_weekdays = new_days_of_the_week.first.sort

# More arrays
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.
planeteers[1]

# Add "Heart" to the end of planeteers.
planeteers.push("Heart")

# Combine planeteers with rangers and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = planeteers.concat rangers

# Alphabetize the contents of heroes using a method.
alphabetised_heroes = heroes.sort

# Randomize the contents of heroes using a method.
randomised_heroes = heroes.shuffle

# Select a random element from heroes using a method.
random_hero = heroes.sample

# display each hero in a new line on the terminal using the .each method

heroes.each do | hero |
    puts hero
end

# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'

heroes.each do | hero |
    if hero.chars.first == "W"
        puts hero
    end
end