# Question 1
# 1. librarys and frameworks
# 2. URL
# 3. Link/Form

# Question 2
# get '/querystring' do
    
# end

# Question 3
                            #unfinished

# Question 4
data = {
  town: {
    residents: ["Maurice", "Belle", "Gaston"],
    castle: {
      num_rooms: 47,
      residents: [
        {
          name: "Robby Benson",
          year_of_birth: 1956,
        }
      ],
      guests: ['birds']
    }
  }
}
# 4.1
p data[:town][:castle][:num_rooms]
#4.2
data[:town][:castle][:guests].unshift('belle') 
# 4.3
p data[:town][:castle][:residents][0][:year_of_birth] 
# 4.4
data[:town][:castle].merge!(cook: "Ms Potts")

# Question 5
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
lost_boys[:age].each [age]

end


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

people = resident[:friends]
i = 0 
while i < people.length do 
  names = resident[:friends][i][:name]
  puts "belle is friends with #{names}"
  i += 1
end

# Question 7
def letter_reverse (str)
    str.split(" ").reverse().join(" ")
end

# Question 8

def scream (number)
  if number == 0 
    p "crickets"
  elsif number == 1
    p 'lol'
  else
    p 'lol' + ('ol' * (number - 1))
  end
end
    