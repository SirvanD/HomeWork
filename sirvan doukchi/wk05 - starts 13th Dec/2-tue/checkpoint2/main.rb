     
# require 'sinatra'
require 'pry'

# get '/' do
#   erb :index
# end


# Checkpoint 2 

=begin

Question1 = Name 3 ways to make a HTTP requests in a web browser.
1- address bar in browser
2- using input/form elements
3- anchor tags

Question 2 = how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)

using keyword params we can get a query string inside a route address. 
username = params['name']
then we can manipulate the code based on username variable


Question 3 = how can we pause a ruby program to inspect the variables? (answer with words or code)

we can add require 'pry' at the top of program then use binding.pry where you want to pause the code while running to inspect the elements. 
=end

# Question 4 = Assume the following hash...

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
p data[:town][:castle][:num_rooms]
# Add "Belle" to the beginning of the guests array
data[:town][:castle][:guests].unshift("Belle")
# print the year of birth for robby by accessing the hash
p data[:town][:castle][:residents][0][:year_of_birth]
# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
data[:town][:castle][:cook] = "Mrs Potts"
=begin final object

{:town=>
  {:residents=>["Maurice", "Belle", "Gaston"],
   :castle=>
    {:num_rooms=>47,
     :residents=>[{:name=>"Robby Benson", :year_of_birth=>1956}],
     :guests=>["Belle", "birds"],
     :cook=>"Mrs Potts"}}}

=end


#  Question 5 = Assume the following array of hashes:
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]

# Use .each to iterate over the lost_boys array to calculate to the sum of all lost boys age. print the sum age in the terminal
sum = 0;
lost_boys.each do |lost_boy|
  
  sum = sum + lost_boy[:age].to_i
  
end
 p total = sum;

#  Question 6 = Assume you have the following hash...
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
while counter < resident[:friends].length  do 

  p "#{resident[:name]} is firends with #{resident[:friends][counter][:name]}"
  
  counter += +1;

end

# Question 7 = Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.





binding.pry