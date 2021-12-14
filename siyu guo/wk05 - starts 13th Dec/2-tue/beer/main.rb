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
  num = params['number'].to_i
  puts num
  if num == nil || num == 99
    redirect '/'
  elsif num == 0
    redirect '/0'
  elsif num == 1
    redirect '/1'
  else
    erb(:number, locals: {
      number:num
    })
  end

  erb(:number, locals: {
    number:num
  })
end



