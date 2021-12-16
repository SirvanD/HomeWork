require 'httparty'
require 'sinatra'
require 'sinatra/reloader'


url = "http://omdbapi.com/&apikey=2f6435d9"
result = HTTParty.get(url)

get '/' do 
    erb(:index, locals:{
    })
end

get '/about' do 
    erb :about
end

get '/movie_details/:title' do 
    title = params['Title']
    url = "http://omdbapi.com/&apikey=2f6435d9"
    result = HTTParty.get(url)
    erb :movie_details, locals:{
    title: title
    }
end
