#  If you want OMDB API to return a list of matching movies based on a search term. Change the query string paramter from t=jaws to s=jaws

require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"

# JSON files: http://www.omdbapi.com/?apikey=2f6435d9&t=
# Poster requests: http://img.omdbapi.com/?apikey=2f6435d9&t=

get '/' do
    erb :index
end

get '/search' do
    input = params['search_title']
    url = "http://www.omdbapi.com/?s=#{input}&apikey=2f6435d9"
    list = HTTParty.get(url)
    erb :search, locals: {
        results: list["Search"]
    }
end

get '/movie_details' do
    input = params['t']
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