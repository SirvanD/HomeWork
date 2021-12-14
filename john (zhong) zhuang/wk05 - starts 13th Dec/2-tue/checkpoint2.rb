# Question 1 (1pt)
# Name 3 ways to make a HTTP requests in a web browser.
# forms / address bar/ links
# ==============================================

# Question 2 (1pt)
# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)
# in address bar, the query string is after question mark"?"
# update15/12: using params['query_string']

# ==============================================

# Question 3 (1pt)
# how can we pause a ruby program to inspect the variables? (answer with words or code)
# using method p
# update15/12: binding.pry
# ==============================================

# Question 4 (2pt)
# Assume the following hash...

# data = {
#   town: {
#     residents: ["Maurice", "Belle", "Gaston"],
#     castle: {
#       num_rooms: 47,
#       residents: [
#         {
#           name: "Robby Benson",
#           year_of_birth: 1956
#         }
#       ],
#       guests: ['birds']
#     }
#   }
# }
# Programmatically using Ruby...

# print the number of rooms in the castle by accessing the hash
# Add "Belle" to the beginning of the guests array
# print the year of birth for robby by accessing the hash
# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")

# update15/12: puts(data[:town][:castle][:num_rooms])
# data[:town][:castle][:guests].unshift("Belle")
# puts(data[:town][:castle][:residents][0][:year_of_birth])
# data[:town][:castle].store(:cook, "Mrs Potts")


# ==============================================

# Question 5 (2pt)
# Assume the following array of hashes:

# lost_boys = [
#   {name: 'Tootles', age: '11'},
#   {name: 'Nibs', age: '9'},
#   {name: 'Slightly', age: '10'},
#   {name: 'Curly', age: '8'},
#   {name: 'The Twins', age: '9'}
# ]
# Use .each to iterate over the lost_boys array to calculate to the sum of all lost boys age. print the sum age in the terminal
# i=0
# x=0
# while i < lost_boys.length
# x += lost_boys[i][:age].to_i
# i = i+1
# end
# puts x

# sum = 0
# lost_boys.each do |boy|
#    age = boy[:age].to_i
#    sum += age
# end
# puts sum

# ==============================================

# Question 6 (3pt)
# Assume you have the following hash...

# resident = {
#   name: "Belle",
#   friends: [
#     {
#       name: "Chip Potts",
#       personality: "adventurous"
#     },
#     {
#       name: "Cogsworth",
#       personality: "serious"
#     },
#     {
#       name: "Lumière",
#       personality: "charsmatic"
  
#     },
#     {
#       name: "Mrs. Potts",
#       personality: "intelligent"
#     }
#   ]
# }
# Using a while loop and string interpolation, print each name in friends to the Terminal...like below

# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts

# friends = resident[:friends]
# i = 0
# while i < friends.length
#     puts("#{resident[:name]} is friends with #{friends[i][:name]}")
#     i = i+1
# end




# ==============================================



# Question 7 (3pt)
# Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

# letter_reverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letter_reverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"

# def letter_reverse(str)
#   puts(str.reverse.split(" ").reverse.join(" "))
# end

# letter_reverse("Now I know what a TV dinner feels like")
# letter_reverse("Put Hans back on the line")


# ==============================================

# Question 8 (3pt)
# Define a scream method that accepts a single parameter and when called should as return a string as per the examples below"

# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(4) #=> "lolololol"
# scream(5) #=> "lololololol"
# scream(7) #=> "lololololololol"
# scream(10) #=> "lolololololololololol"


# def scream(num)
#   if num == 0
#     puts "crickets"
#   else
#     i = 1
#     lol=""
#     while i<= num 
#         lol  =  "lo"*i + "l"
#         i = i+1
#     end
#     puts lol
#   end

# end

# scream(10)
