lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
#while loop
# i=0
# while i<lost_boys.length
#  tot_age = tot_age + lost_boys[i][:age].to_i
#  i = i+1
# end

tot_age = 0

lost_boys.each do |boy|
    tot_age+=boy[:age].to_i
end

puts("Total lost boys age :#{tot_age}")