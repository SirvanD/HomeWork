require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"

# JSON files: http://www.omdbapi.com/?apikey=2f6435d9&t=
# Poster requests: http://img.omdbapi.com/?apikey=2f6435d9&t=

get '/' do
    erb :index
end

get '/movie_details' do
    input = params['input-title']
    url = "http://www.omdbapi.com/?apikey=2f6435d9&t=#{input}"
    res = HTTParty.get(url)
    erb :movie_details, locals: {
        title: res["Title"], 
        year: res["Year"],
        poster: res["Poster"],  
        plot: res["Plot"]
    }
end

get '/about' do
    erb :about
end