# Question 1 (1pt)
# Name 3 ways to make a HTTP requests in a web browser.
- A form 
- Browswer / search bar 
- Clicking on a link

# Question 2 (1pt)
# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)
get '/page here' do --> and then instructions of whats in the page or defined in the page


# Question 3 (1pt)
# how can we pause a ruby program to inspect the variables? (answer with words or code)
Call pry to pause the program inside the terminal

# Question 4 (2pt)
# Assume the following hash...

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

# print the number of rooms in the castle by accessing the hash
data[:town][:castle][:num_rooms]

# Add "Belle" to the beginning of the guests array
data[:town][:castle][:guests].unshift('Belle')

# print the year of birth for robby by accessing the hash
data[:town][:castle][:residents][0][:year_of_birth]

# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
data[:town][:castle].merge!(cook: "Mrs Potts")

# Question 5 (2pt)
# Assume the following array of hashes:

lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
# Use .each to iterate over the lost_boys array to calculate to the sum of all lost boys age. print the sum age in the terminal

lost_boys[:age].each do |age|
    counter = 0

        while counter <= 5
            age = lost_boys[:age]
        
            counter += 1 # counter = counter + 1
        end

    puts(age).to_i
    total = total + age.to_i
end

puts(total)
# ((I know this doesn't work, this is just where I got to before time ran out))




# Question 6 (3pt)
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
# Using a while loop and string interpolation, print each name in friends to the Terminal...like below

# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts

counter = 0

while counter <= 4
    name = resident[:friends][counter][:name]

    puts("Belle is friends with #{name}")
 
    counter += 1 # counter = counter + 1
end



# Question 7 (3pt)
# Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

# letter_reverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letter_reverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"

string = "Now I know what a TV dinner feels like"
new_string = string.reverse

puts new_string


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
