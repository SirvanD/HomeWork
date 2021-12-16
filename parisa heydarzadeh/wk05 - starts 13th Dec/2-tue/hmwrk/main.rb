require 'httparty'
require 'sinatra'
require 'sinatra/reloader'


get '/' do
    erb(:index)
    
end

get '/0' do
    erb(:zerobottle)
end

get '/number' do
    number = params['number'].to_i 
    puts number
    if number == 99 || number == nil 
        redirect '/'
      elsif number == 0
        redirect '/0'
      elsif number == 1
        redirect '/1'

    erb(:bottle_number, locals: {
         bottle_number: number,
    })
end