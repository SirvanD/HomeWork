# -Question 1: Name 3 ways to make a HTTP requests in a web browser.
# 1. address bar
# 2. form
# 3. links



# -Question 2: how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)
# Use params
set the user input as "ticker" in erb
ticker = params["ticker"]
url = 'http://omdbapi.com/?s='+ ticker +'&apikey=2f6435d9'



# -Question 3: how can we pause a ruby program to inspect the variables? (answer with words or code)
#  Use Pry(require 'pry'; binding.pry)



# -Question 4: 
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
# puts data[:town][:castle][:num_rooms]
# data[:town][:castle][:guests].unshift("Belle")
# puts data[:town][:castle][:residents][0][:year_of_birth]
# data[:town][:castle].merge!({:cook => "Mrs Potts"})



# -Question 5: 
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
age_total = 0
lost_boys.each do |age|
  age_total += age[:age].to_i
end
puts age_total


# -Question 6: 
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
# while counter <= 3
#     puts "#{resident[:name]} is friends with #{resident[:friends][counter][:name]}"
#     counter += 1
# end



# -Question 7
# def letter_reverse(sentence)
#     words = (sentence).split(/\W+/)
#     index = 0  
#     while index < words.length
#         words[index].reverse!
#         index += 1
#     end
#     new_sentence = words.join(" ")
#     return new_sentence
# end
# puts letter_reverse("Now I know what a TV dinner feels like")



# -Question 8: 
# def scream(num)
#     counter = 0
#     array = ["l"]
#     if num == 0
#         array[0] = "crickets"
#     else
#         while counter < num
#             array.push('ol')
#             counter += 1
#         end     
#     end
#     array = array.join("")
#     return array
# end

# puts scream(0)
# puts scream(5)