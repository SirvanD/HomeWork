# Question 1 (1pt)
# Name 3 ways to make a HTTP requests in a web browser.
    #form, address bar and links

# Question 2 (1pt)
# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)
    #using params[] to retrieve the information of interest inside the url e.g. http://localhost:4567/hello?name=dt params["name"] will retrieve "dt"

# Question 3 (1pt)
# how can we pause a ruby program to inspect the variables? (answer with words or code)
    #require 'pry'
    #binding.pry
    #put these lines before the variables and run the ruby file in the terminal
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
data[:town][:residents].unshift("Belle")
# print the year of birth for robby by accessing the hash
data[:town][:castle][:residents][0][:year_of_birth]
# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
data[:town][:castle][:cook] = "Mrs Potts"
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
arr = []
lost_boys.each do |boy|
    age = boy[:age].to_i
    arr.push(age)
end
print arr.sum
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
i = 0
friends = resident[:friends]
while i < friends.length
    puts "Belle is friends with #{friends[i][:name]}"
    i += 1
end
# Question 7 (3pt)
# Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

# letter_reverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letter_reverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"
 


def letter_reverse (str)
    arr = []
    word_arr = str.split(" ")
    word_arr.each {|word|
        arr.push(word.reverse)
    }
    puts arr.join(" ")
end

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
# all done! please push your code up to github


def scream (num)
    i = 0
    result = "l"
    if num == 0
        puts "crickets"
    else
        while i < num
        result += "ol"
        i += 1
        end
        puts result
    end
end

scream (3)