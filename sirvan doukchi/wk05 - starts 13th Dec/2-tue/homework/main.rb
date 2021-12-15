require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb(:index, locals: {
    number:99
  })
end

get '/0' do
  erb:zero_bottles

end

get '/:number' do 

  num = params['number'].to_i  
  puts num
  if num == 99 || num == nil 
    redirect '/'
  elsif num == 0
    redirect '/0'
  else
    erb(:number, locals: {
      number:num
    })
  end

  erb(:number, locals: {
    number:num
  })
  end



