days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# days_of_the_week.shift

more_days = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]]

more_days.pop
## could also flatten here to remove the redundant array, so more_days.flatten would make it back to a single array, rather than an array stored in an array.
more_days[0].sort!

# # more arrays

# Starting with the following array...

# > remember to test your code and use (irb/pry/p)!


planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]


# Access the second value in `planeteers`.


planeteers[1]

# Add "Heart" to the end of `planeteers`.


planeteers.push "Heart"


# Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes =  planeteers + rangers
# OR heroes = planeteers.concat rangers


# Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).


heroes.sort!


# Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).


heroes.shuffle!


# Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).


heroes.sample


# display each `hero` in a new line on the terminal using the `.each` method


heroes.each do |hero|
  puts hero
end


# display each `hero` in a new line on the terminal using the `.each` method only if the hero starts with the letter 'W'


heroes.each do |hero|
  if hero[0] == "W"
      puts hero
  end
end
