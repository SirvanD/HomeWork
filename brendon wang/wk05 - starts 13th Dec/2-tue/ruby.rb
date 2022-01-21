# Question 1
# Name 3 ways to make a HTTP requests in a web browser.

# 1. web browser
# 2. forms
# 3. links

# Question 2
# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)

# form action = "/search"
  # input name = q
  # button Search 
# get "/search" do 
# google_search = params["q"]



# Question 3 (1pt)
# how can we pause a ruby program to inspect the variables? (answer with words or code)

# require pry
# binding.pry

# Question 4 (2pt)
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

# print the number of rooms in the castle by accessing the hash
puts data[:town][:castle][:num_rooms]
# Add "Belle" to the beginning of the guests array
data[:town][:castle][:guests].unshift("Belle")
# print the year of birth for robby by accessing the hash
puts data[:town][:castle][:residents][0][:year_of_birth]
# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
data[:town][:castle][:cook] = "Mrs Potts"


# Question 5

lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
# Use .each to iterate over the lost_boys array to calculate to the sum of all lost boys age. print the sum age in the terminal

sum_age = 0
lost_boys.each do |boy|
    sum_age += boy[:age].to_i()
end
puts sum_age

# Question 6
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
# Using a while loop and string interpolation, print each name in friends to the Terminal
belles_friends = ""
i = 0
while i < resident[:friends].length
    belles_friends += "Belle is friends with #{resident[:friends][i][:name]} \n"
    i += 1
end

puts belles_friends


# Question 7
# Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

def letter_reverse(string)
    array_words = string.split(" ")
    array_words.each do |word|
        word.reverse!
    end
    return array_words.join(" ")
end

letter_reverse("Now I know what a TV dinner feels like")

# Question 8
# Define a scream method that accepts a single parameter and when called should as return a string as per the examples below"

def scream(num)
    output = ""
    if num == 0
        output += "crickets"
    else
        output += "l"
        num.times do 
            output += "ol"
        end
    end
    return output
end

scream(10)



