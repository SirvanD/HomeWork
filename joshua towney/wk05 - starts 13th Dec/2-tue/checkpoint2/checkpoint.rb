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

# data[:town][:castle][:num_rooms]

# - Add "Belle" to the **beginning** of the `guests` array

# data[:town][:castle][:guests].unshift("Belle")

# - print the year of birth for robby by accessing the hash

# data[:town][:castle][:residents][0][:year_of_birth]

# - Add a new key and value pair to the `castle` hash (key `:cook` value `"Mrs Potts"`)

# data[:town][:castle].store(:cook,'Mrs Potts')


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

age = 0

lost_boys.each do
    i = 0
    individual_age = lost_boys[i][:age].to_i
    age = age + individual_age
    i+=1
end

puts age



# binding.pry


# # Question 6 (3pt)
# Assume you have the following hash...
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
# friends_names = resident[:friends][i][:name]

while friends_array.length() <= 4 do
    friends_names = resident[:friends][i][:name]
    puts "Belle is friends with #{friends_names}"
    i += 1
end

##### this prints the names but runs into an error on line 124 at the end ####


# binding.pry


# # Question 7 (3pt)

# Write a function `letter_reverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

# ```ruby
# letter_reverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letter_reverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"
# ```

def letter_reverse(string)
    puts string.reverse
end

letter_reverse("Now I know My ABCs")


# # Question 8 (3pt)

# Define a `scream` method that accepts a single parameter and when called should as return a string as per the examples below"
# ```ruby
# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(4) #=> "lolololol"
# scream(5) #=> "lololololol"
# scream(7) #=> "lololololololol"
# scream(10) #=> "lolololololololololol"
# ```

def scream(number)

    ol_number = number - 1

    if number <= 0 
        puts "crickets"
    elsif number == 1
        puts "lol"
    else 
        puts "lol" + ("ol"*ol_number)
    end

end

scream(-1)
scream(0)
scream(1)
scream(5)