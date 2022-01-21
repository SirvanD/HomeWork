# # Question 1
# # through the address bar, through a link, or through a form 

# # Question 2 
# # using the params variable then whatever you've named it eg
# # params[ticker] for the stock ticker

# # Question 3
# # - require 'pry'
# # - binding.pry where you want to pause 

# Question 4 
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

# # Programmatically using Ruby...
# # - print the number of rooms in the castle by accessing the hash
# print data[:town][:castle][:num_rooms]
# # - Add "Belle" to the **beginning** of the `guests` array
# data[:town][:castle][:guests].unshift("Belle")
# # - print the year of birth for robby by accessing the hash
# print data[:town][:castle][:residents][0][:year_of_birth]
# # - Add a new key and value pair to the `castle` hash (key `:cook` value `"Mrs Potts"`)
# data[:town][:castle][:cook] = "Mrs Potts"


# Question 5 Use `.each` to iterate over the `lost_boys` array to calculate to the sum of all lost boys age.
#print the sum age in the terminal
# lost_boys = [
#   {name: 'Tootles', age: "11"},
#   {name: 'Nibs', age: '9'},
#   {name: 'Slightly', age: '10'},
#   {name: 'Curly', age: '8'},
#   {name: 'The Twins', age: '9'}
# ]

# total_age = 0
# lost_boys.each do |boy|
    
#     total_age = total_age + boy[:age].to_i
# end
# print total_age



# Question 6 **Using a while loop** and string interpolation, print each name in `friends` to the Terminal...like below
# ```
# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts
# ```
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
# counter = 0
# while counter < resident[:friends].length do
#     puts "Belle is friends with #{resident[:friends][counter][:name]}"
#     counter = counter +1
# end

# # question 7 Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

# def letter_reverse(string_for_reversal)
#     words = string_for_reversal.split(" ")
#     words.each do |word|
#         word.reverse!
#     end

#     return words.join(" ")
# end



# #question 8 Define a `scream` method that accepts a single parameter and when called should as return a string as per the examples below"

# # scream(0) #=> "crickets"
# # scream(1) #=> "lol"
# # scream(2) #=> "lolol"
# # scream(3) #=> "lololol"
# # scream(4) #=> "lolololol"
# # scream(5) #=> "lololololol"
# # scream(7) #=> "lololololololol"
# # scream(10) #=> "lolololololololololol"

# def scream(number)
#     if number == 0
#         return "crickets"
#     else 
#         return "lol" + "ol"*(number-1)
#     end
# end