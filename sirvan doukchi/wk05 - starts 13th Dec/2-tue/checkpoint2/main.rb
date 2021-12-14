     
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
print "\n\n"
# Add "Belle" to the beginning of the guests array
data[:town][:castle][:guests].unshift("Belle")
print "\n\n"
# print the year of birth for robby by accessing the hash
p data[:town][:castle][:residents][0][:year_of_birth]
print "\n\n"
# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
data[:town][:castle][:cook] = "Mrs Potts"
print "\n\n"
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
 print "\n\n"

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

# letter_reverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
# letter_reverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"

str_input = ""
def letter_reverse (str_input) 
  str_array = []
  str_array_reverse = []
  str_array = str_input.split(' ')
  i = 0
  # print str_array;
  while i < str_array.length 
    str_array_reverse.push (str_array[i].reverse())
    i = i+1;
  end
  print "\n\n"
  print str_array_reverse

end

letter_reverse("Now I know what a TV dinner feels like") #"woN I wonk tahw a VT rennid sleef ekil"



# Question 8 = Define a scream method that accepts a single parameter and when called should as return a string as per the examples below"

# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(4) #=> "lolololol"
# scream(5) #=> "lololololol"
# scream(7) #=> "lololololololol"
# scream(10) #=> "lolololololololololol"

def scream (num_input)
  j = 0
  str_out_array = []
  if num_input == 0
      str_out_array.push("crickets")
return str_out_array
  elsif num_input > 0
    while j < num_input
      str_out_array.push("lol")
      j = j + 1;
    end
  end
return str_out_array.join('');
end


print "\n\n"
print scream(0)
print "\n"
print scream(2)
print "\n"
print scream(5)
print "\n"
print scream(10)
print "\n\n"



# binding.pry