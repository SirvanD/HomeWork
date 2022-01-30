require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb(:index, locals: {
    number:99
  })
end

get '/0' do
  erb(:zero)
end

get '/1' do
  erb(:one)
end

get '/:number' do
  number = params['number'].to_i
  puts number
  if number == nil || number == 99
    redirect '/'
  elsif number == 0
    redirect '/0'
  elsif number == 1
    redirect '/1'
  else
    erb(:number, locals: {
      number:number
    })
  end

  erb(:number, locals: {
    number:number
  })
end



