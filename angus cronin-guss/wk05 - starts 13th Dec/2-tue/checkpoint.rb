# Question 1
# 1. form
# 2. address bar
# 3. Link

# Question 2
# localhost:4567/
# get '/?string' do
    # some_query = params['string']
    # erb :index
# end

# Question 3
# binding.pry

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
data[:town][:castle][:guests].unshift('Belle') 
# 4.3
p data[:town][:castle][:residents][0][:year_of_birth] 
# 4.4
data[:town][:castle].store(:cook, "Mrs Potts")

# Question 5
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]

total_age = 0
lost_boys.each do |boy|
  total_age = total_age + boy[:age].to_i
  
end
p total_age


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
  puts "Belle is friends with #{names}"
  i += 1
end

# Question 7
def letter_reverse (str)
    str.split(" ").reverse().join(" ").reverse
end

# Question 8

def scream (number)
  if number == 0 
    return "crickets"
  elsif number == 1
    return 'lol'
  else
    return 'lol' + ('ol' * (number - 1))
  end
end
    