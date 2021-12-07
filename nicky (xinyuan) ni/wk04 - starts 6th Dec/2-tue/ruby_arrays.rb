days_of_the_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

days_of_the_week.shift
days_of_the_week.push('Sunday')

days_in_a_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday','Sunday']]

days_in_a_week.delete_at(1)

(days_in_a_week[0]).sort!





planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

# p planeteers[1]

# p planeteers.push("heart")

# heroes = planeteers.concat(rangers)

# p hero.sort!

# p hero.shuffle

# p hero.sample

# hero.each { |item| puts item }
 
# hero_w = hero.select { |word| word.start_with?('W') }
# p hero_w.each { |item| puts item }
