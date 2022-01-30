require 'pry'

#name three ways we can make a HTTP request in the browser
#we can use the Address bar, form and anchor tags


#how to acecss query strings in sent to the server inside a route in a sinatra web application?
#you can use the localhost:4567/?name=Matthew

# get '/' do

# params["name"]

# end

#to pause a ruby program and inspect variables we can use binding.pry
#note this will require pry!


#assume the following hash.. 

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

#print the number of rooms in the castle by accessing the hash:

print data[:town][:castle][:num_rooms]

#add Belle to the beginning of the guests array:
data[:town][:castle][:guests].unshift("Belle")

#print the year of birth for Robby by accessing the hash
print data[:town][:castle][:residents][0][:year_of_birth]

#add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
#object = {cook: "Mrs.Potts"}
data[:town][:castle].merge!(cook: "Mrs Potts")




#assume the following array of hashes:
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]

total = 0

lost_boys.each do |boy|
    
    age = boy[:age].to_i

    total = total + age
    
end
print total


# assume you have the following hash:


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

#using a while loop and string interpolation,
#print the name of each "friends" to the terminal.. like below

# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts
counter = 0
while counter < 4
    
    puts "#{resident[:name]} is friends with #{resident[:friends][counter][:name]}"
    #arrayCounter += 1
    counter += 1
end

def letter_reverse(string)
    string.split.map() { |string| string.reverse}.join(" ")
end

letter_reverse("hello there, ahhh general kenobi")



def scream (number)
    if number == 0
        return "crickets"
    else
        return "lol" + "ol" *(number - 1)
    end
end










binding.pry