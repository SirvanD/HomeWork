require 'pry'

days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

days_of_the_week.shift()
#removes it with shift

days_of_the_week.push("Sunday")


days_of_the_week2 =  [ 
    [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
 ["Saturday", "Sunday"]
 ] 

days_of_the_week2.delete(["Saturday", "Sunday"])




#sort the remaining days alphabetically

days_of_the_week2[0].sort()






# more arrays

#Starting with the following array...

# > remember to test your code and use (irb/pry/p)!


planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]


#Access the second value in `planeteers`.

planeteers[1]

#Add "Heart" to the end of `planeteers`.


planeteers.push("heart") 

#Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]


planeteers.concat(rangers) # Your answer here
heroes = planeteers
binding.pry
#Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
# # Your answer here
# ```
 heroes.sort()

#Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
# # Your answer here
# ```
 heroes.shuffle

#Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
# # Your answer here
# ```
 heroes.sample

#display each `hero` in a new line on the terminal using the `.each` method

# ```rb
# # Your answer here
# ```

 heroes.each do |hero|
     puts hero
 end



#display each `hero` in a new line on the terminal using the `.each` method only if the hero starts with the letter 'W'

# ```rb
# # Your answer here
# planeteers.each do
    
# ```


