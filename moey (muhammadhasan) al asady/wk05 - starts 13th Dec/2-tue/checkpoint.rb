# > Competency checkpoint! 

# > find out what you know and what you don't know.

# > This is a timed exercise. You have **(100 minutes)** plus 5 minutes reading time.

# > Your aim should be 100% correct. **So test your code**.

# > If you finish early. Take a break.

# > If you couldn't finish, it's ok you'll get 2 days to finish it as homework. 


# # Question 1 (1pt)

# Name 3 ways to make a HTTP requests in a web browser.

# address bar
# get
# post

# # Question 2 (1pt)

# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)

# variable_name = params["anything"]


# # Question 3 (1pt)

# how can we pause a ruby program to inspect the variables? (answer with words or code)

# binding.pry()

# # Question 4 (2pt)

# Assume the following hash...
# ```ruby
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
# ```
# Programmatically using Ruby...
# - print the number of rooms in the castle by accessing the hash
data[:town][:castle][:num_rooms]
# - Add "Belle" to the **beginning** of the `guests` array
data[:town][:residents].unshift('Belle')
# - print the year of birth for robby by accessing the hash
data[:town][:castle][:residents][0][:year_of_birth]
# - Add a new key and value pair to the `castle` hash (key `:cook` value `"Mrs Potts"`)


# # Question 5 (2pt)
# Assume the following array of hashes:
# ```ruby
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
# ```

# Use `.each` to iterate over the `lost_boys` array to calculate to the sum of all lost boys age.

# print the sum age in the terminal

total = 0

lost_boys.each do |age|
    total += age[:age]
    puts total
end



# # Question 6 (3pt)
# Assume you have the following hash...
# ```ruby
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



# ```
# **Using a while loop** and string interpolation, print each name in `friends` to the Terminal...like below
# ```
# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts
i=0
while i < resident[:friends].length
    puts "#{resident[:name]} is friends with #{name}"
    i++
end
# ```

# # Question 7 (3pt)

# Write a function `letter_reverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

# ```ruby
# letter_reverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letter_reverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"
# ```
str = "moey"

def wordReverse |str|
    reversed = str.reverse
    puts reversed
end

wordReverse(str)

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


# # all done! please push your code up to github