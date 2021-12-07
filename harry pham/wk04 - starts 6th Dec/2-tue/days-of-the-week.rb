# days_of_the_week = [
#     "Sunday",
#     "Monday",
#     "Tuesday",
#     "Wednesday",
#     "Thursday",
#     "Friday",
#     "Saturday",
# ]



days_of_the_week.shift
days_of_the_week.push "Sunday"
puts days_of_the_week


days_of_the_week = [
    [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
],
[
    "Saturday",
    "Sunday"
    ]
]

days_of_the_week.pop
puts days_of_the_week[0].sort()



planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.

planeteers[1]

# Add "Heart" to the end of planeteers.

planeteers.push "Heart"

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers.concat rangers
puts heroes

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

sort_hero = heroes.sort()
puts sort_hero
# Randomize the contents of heroes using a method. The Ruby documentation might help.

rand(heroes.length)

# Select a random element from heroes using a method. The Ruby documentation might help.

puts heroes.sample

# display each hero in a new line on the terminal using the .each method

number = 1
heroes.each do |hero|
puts "#{number} #{hero}"
number += 1
end

# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'

number = 1
heroes.each do |hero|
    if hero[0] == "W"
    puts "#{number} #{hero}"
    number += 1
    end

end