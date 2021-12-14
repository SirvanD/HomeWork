# Question 1 (1pt)
# Name 3 ways to make a HTTP requests in a web browser.

# 1. Address bar direct entry
# 2. form
# 3. anchors

# Question 2 (1pt)
# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)

# FORMAT ONE - grab from route GET
# get '/route' do
#     queryString = params['token1']

# FORMAT TWO - pretty web links
# get "/welcome/:name" do
#     "Hello #{params["name"]}!"
#   end

# Question 3 (1pt)
# how can we pause a ruby program to inspect the variables? (answer with words or code)

# require 'pry'
# insert binding.pry
# then using the pry terminal to inspect elements/variables, etc

# Question 4 (2pt)
# Assume the following hash...

# data = {
#     town: {
#     residents: ["Maurice", "Belle", "Gaston"],
#     castle: {
#         num_rooms: 47,
#         residents: [
#         {
#             name: "Robby Benson",
#             year_of_birth: 1956
#         }
#         ],
#         guests: ['birds']
#     }
#     }
# }
# Programmatically using Ruby...

# print the number of rooms in the castle by accessing the hash

# print data[:town][:castle][:num_rooms]

# Add "Belle" to the beginning of the guests array

# data[:town][:castle][:guests].unshift('Belle')

# print the year of birth for robby by accessing the hash

# print data[:town][:castle][:residents][0][:year_of_birth]

# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")

# data[:town][:castle].merge!(cook: "Mrs Potts")

#         Question 5 (2pt)
# Assume the following array of hashes:

lost_boys = [
  { name: 'Tootles', age: '11' },
  { name: 'Nibs', age: '9' },
  { name: 'Slightly', age: '10' },
  { name: 'Curly', age: '8' },
  { name: 'The Twins', age: '9' }
]

# Use .each to iterate over the lost_boys array to calculate to the sum of all lost boys age. print the sum age in the terminal

total_age = 0
lost_boys.each do |boy|
  total_age += boy[:age].to_i
end
print total_age

# Question 6 (3pt)
# Assume you have the following hash...

resident = {
  name: 'Belle',
  friends: [
    {
      name: 'Chip Potts',
      personality: 'adventurous'
    },
    {
      name: 'Cogsworth',
      personality: 'serious'
    },
    {
      name: 'Lumière',
      personality: 'charsmatic'

    },
    {
      name: 'Mrs. Potts',
      personality: 'intelligent'
    }
  ]
}
# Using a while loop and string interpolation, print each name in friends to the Terminal...like below

i = 0

while i < resident[:friends].length
  puts resident[:name] + ' is friends with ' + resident[:friends][i][:name]
  i += 1
end

# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts

# Question 7 (3pt)
# Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

def letter_reverse(sentence)
  puts sentence.split.map(&:reverse).join ' '
end
letter_reverse('Now I know what a TV dinner feels like')
# => "woN I wonk tahw a VT rennid sleef ekil"
letter_reverse('Put Hans back on the line')
# => "tuP snaH kcab no eht enil"

# Question 8 (3pt)
# Define a scream method that accepts a single parameter and when called should as return a string as per the examples below"
def scream(num_screams)
  if num_screams == 0
    'crickets'
  else
    'l' + ('ol' * num_screams)
  end
end

puts scream(0)
puts scream(1)
puts scream(2)
puts scream(3)
puts scream(4)
puts scream(5)
puts scream(7)
puts scream(10)

# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(4) #=> "lolololol"
# scream(5) #=> "lololololol"
# scream(7) #=> "lololololololol"
# scream(10) #=> "lolololololololololol"
