require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    "Welcome to movies are us"

    erb(:index)
end

get'/about' do
    "This is the About section"

    erb(:about)
end

get '/movie_details' do
    "Moive poster goes here"
    movie = params["movie"]
    url = "https://omdbapi.com/?t=#{movie}&apikey=ebc931bb"

    res = HTTParty.get(url)
    puts res["Title"]
    puts res["Year"]
    puts res["Plot"]    
    erb(:movie_details)

end