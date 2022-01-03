require 'sinatra' 
require 'sinatra/reloader'



get '/' do 

  erb(:index)
end


bottles = 99


get "/bottles/#{bottles}" do
  number = params['number']
  bottles = params['bottles']
  
  erb(:bottles_left, locals: {
      number: number, bottles: bottles 
  })
end












get '/1' do 
  erb(:oneleft)
end

get '/0' do 
  erb(:noneleft)
end


