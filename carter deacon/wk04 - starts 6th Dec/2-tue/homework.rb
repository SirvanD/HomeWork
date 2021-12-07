require "pry"

#  Ruby Arrays
days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# Remove Sunday from the first postion and move it to the last position. Use array methods.
days_of_the_week.push(days_of_the_week.shift)

# Create a new array of the days of the week
days_of_the_week = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    ["Sunday", "Saturday"]
]
# Remove either the weekdays or the weekends
# Removes Weekends
days_of_the_week.pop

# Sort the remaining days alphabetically
days_of_the_week[0].sort

# MORE ARRAYS

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.
planeteers[1]

# Add "Heart" to the end of planeteers.
planeteers.push "Heart"

# Combine planeteers with rangers and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = planeteers.concat rangers

# Alphabetize the contents of heroes using a method.
heroes.sort

# Randomize the contents of heroes using a method.
heroes.shuffle

# Select a random element from heroes using a method.
heroes.sample()

# display each hero in a new line on the terminal using the .each method
heroes.each do |hero|
    puts "#{hero}\n".chomp
end

# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'
heroes.each do |hero|
    if "#{hero[0]}" == "W"
        puts "#{hero}\n".chomp
    end
end