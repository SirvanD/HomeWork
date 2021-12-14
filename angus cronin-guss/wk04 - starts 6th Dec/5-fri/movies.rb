require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

title = gets.chomp
url = "http://omdbapi.com/?t=#{title}&apikey=2f6435d9"
result = HTTParty.get(url)

get '/' do 
    erb(:index, :about, locals:{
    })
end

get '/movies' do
    moviename = params['title']
    erb(:movie_details, locals:{
        
    })
end
get '/about'
erb(:about, locals: {

})