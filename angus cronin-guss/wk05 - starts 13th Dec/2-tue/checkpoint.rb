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
          year_of_birth: 1956
        }
      ],
      guests: ['birds']
    }
  }
}
# 4.1
p data[:town][:castle][:num_rooms]
#4.2
data[:town][:castle][:guests].push('belle') #unfinished
# 4.3
#p data[:town][:castle][:residents[:year_of_birth] #unfinished
# 4.4
cook = {cook: 'Mrs Potts'} 
data[:town][:castle].merge!(cook: "Ms Potts")

# Question 5
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
lost_boys.each do |calculate|
    calculate = calculate + {:age}
end
