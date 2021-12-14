# Question 1
1. Using the address bar
2. Clicking a link (anchor)
3. Submitting a form

# Question 2
Use the params hash to access the query string parameters

# Question 3
Use a REPL like pry and place binding.pry in your code where you want the program to be paused, or binding.irb 

# Question 4
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

sum_of_ages = 0
lost_boys.each do | lost_boy |
    sum_of_ages += lost_boy[:age].to_i
end
puts sum_of_ages

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

counter = 0
while counter < resident[:friends].length

    puts "#{resident[:name]} is friends with #{resident[:friends][counter][:name]}"
    counter += 1 

end

# Question 7
def letter_reverse(string) 
    string_array = string.split
    reversed_array = []
    string_array.each do | string |
        reversed_array.push(string.reverse)
    end 
    reversed_array.join(" ")
end

# Question 8
# I feel a bit weird about setting the initial value of scream as 'l' since from a narrative perspective it doesn't make much sense, but it seemed like the least problematic way to concatenate the correct number of lols. Would love to know if there is a better way to do this. 
def scream(num_of_screams)
    if num_of_screams <= 0 
        "crickets"
    else
        scream = "l"
        num_of_screams.times do
            scream += "ol"
        end
        scream
    end
end