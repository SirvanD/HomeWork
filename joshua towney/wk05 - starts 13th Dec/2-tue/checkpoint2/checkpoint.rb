# # Question 1 (1pt)
# Name 3 ways to make a HTTP requests in a web browser.

# address bar|forms|links 

# # Question 2 (1pt)
# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)

# query string will have a name such as ?name=name
# we can access this with nae = params["name"]

# # Question 3 (1pt)
# how can we pause a ruby program to inspect the variables? (answer with words or code)

# we need to have require 'pry'
# we can then call binding.pry within the code to pause the programme

# # Question 4 (2pt)
# Assume the following hash...

require 'pry'

data = {
  town: {
    residents: ["Maurice", "Belle", "Gaston"],
    castle: {
      num_rooms: 47,
      residents: [
        {
          name: "Robby Benson",
          year_of_birth: 1956
        }
      ],
      guests: ['birds']
    }
  }
}

# Programmatically using Ruby...
# - print the number of rooms in the castle by accessing the hash

 puts data[:town][:castle][:num_rooms] # replace puts with print

# - Add "Belle" to the **beginning** of the `guests` array

data[:town][:castle][:guests].unshift("Belle")

# - print the year of birth for robby by accessing the hash

 puts data[:town][:castle][:residents][0][:year_of_birth] # replace puts with print

# - Add a new key and value pair to the `castle` hash (key `:cook` value `"Mrs Potts"`)

data[:town][:castle].store(:cook,'Mrs Potts')


# binding.pry


# # Question 5 (2pt)
# Assume the following array of hashes:

lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]

# Use `.each` to iterate over the `lost_boys` array to calculate to the sum of all lost boys age.
# print the sum age in the terminal

sum_age = 0

lost_boys.each do |lost_boy|
  individual_age = lost_boy[:age].to_i # integers not needed when doing for each
  sum_age += individual_age
end

puts sum_age

# # Question 6 (3pt)

resident = {
  name: "Belle",
  friends: [
    {
      name: "Chip Potts",
      personality: "adventurous"
    },
    {
      name: "Cogsworth",
      personality: "serious"
    },
    {
      name: "Lumière",
      personality: "charsmatic"
  
    },
    {
      name: "Mrs. Potts",
      personality: "intelligent"
    }
  ]
}

# **Using a while loop** and string interpolation, print each name in `friends` to the Terminal...like below

# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts

friends_array = resident[:friends]
i = 0

while i < friends_array.length do
    friends_names = resident[:friends][i][:name]
    puts "Belle is friends with #{friends_names}"
    i += 1
end

# # Question 7 (3pt)

# Write a function `letter_reverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

def letter_reverse(string)
  string.split.map {|word|word.reverse}.join(" ")
end

# if return is not input, the it will return in ruby. It is generaly implied that we should be returning in Ruby.

# # Question 8 (3pt)

# Define a `scream` method that accepts a single parameter and when called should as return a string as per the examples below"

# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(4) #=> "lolololol"
# scream(5) #=> "lololololol"
# scream(7) #=> "lololololololol"
# scream(10) #=> "lolololololololololol"

def scream(number)

    ol_number = number - 1

    if number <= 0 
        return "crickets"
    elsif number == 1
        return "lol"
    else 
        return "lol" + ("ol"*ol_number)
    end

end


scream(0)
scream(1)
scream(2)
scream(3)
scream(4)
scream(5)
scream(7)
scream(10)
