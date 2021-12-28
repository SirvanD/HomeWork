require 'sinatra' 
require 'sinatra/reloader'


get '/' do
  
  erb(:index)
end


get '/:number' do
  number = params["number"]
  puts number
  if number == nil || number == 99
    redirect '/'
  elsif number == 0
    redirect '/0'
  elsif number == 1
    redirect '/1'
  end
  "#{number} bottles of beer"
  erb(:bottles_left, locals: {
      number: number
  })
end



