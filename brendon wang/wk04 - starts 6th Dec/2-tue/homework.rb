days_of_the_week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

# first day monday
days_of_the_week.shift
days_of_the_week.push("Sunday")

#create new array of weeks
new_week_days = []
new_weekend_days = []
new_days_of_week = []

0.upto(4) do |num|
    new_week_days.push(days_of_the_week[num])
end
puts new_week_days

puts "+"
5.upto(6) do |num|
    new_weekend_days.push(days_of_the_week[num])
end
puts new_weekend_days

puts "="

new_days_of_week.push(new_week_days)
new_days_of_week.push(new_weekend_days)
puts new_days_of_week


#remove either weekdays or weekends

new_days_of_week.pop
# new_days_of_week.shift
puts "weekends removed in #{new_days_of_week}"

#sort days alphabetically
sorted_days = new_days_of_week[0].sort
puts sorted_days

# more arrays

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

#Access the second value in planeteers.

puts planeteers[1]

#Add "Heart" to the end of planeteers.

planeteers.push("Heart")

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = []
rangers.each do |ranger|
    planeteers.push(ranger)
end
heroes.push(planeteers)

# puts heroes

#Alphabetize the contents of heroes using a method. The Ruby documentation might help.

puts heroes[0].sort

#Randomize the contents of heroes using a method. The Ruby documentation might help.

puts "shuffling #{heroes[0].shuffle}"

#Select a random element from heroes using a method. The Ruby documentation might help.

puts "sampling #{heroes[0].sample}"

# display each hero in a new line on the terminal using the .each method

puts heroes[0] 

# display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'
heroes[0].each do |hero|
    if hero[0] == "W"
        puts "#{hero} starts with W"
    end
end













