# https://gist.github.com/epoch/8292180

#Question 1
days_of_the_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




# # Question 2
days_of_the_week.delete("Sunday")
days_of_the_week.push("Sunday")
# p days_of_the_week


# Question 3

theWeek = [
     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     ['Saturday', 'Sunday',],
]

# Question 4
p theWeek.shift
# Question 5
theWeek.sort


# more arrays
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# 1
planeteers[1]
# 2
planeteers.push("Heart")
# 3
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = []
heroes.concat(rangers, planeteers)
# 4
p heroes.sort

# 5 
p heroes.shuffle
# 6 
p heroes[rand(heroes.count)]
# 7 
heroes.each do |e|
    puts e
end
# 8 
heroes.each do |e|
    if e.start_with?('W') == true
        puts e
    end
end