require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 


get "/" do
erb(:index)
end

get "/movie" do
    title = params["title"].to_s
    result = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=89b0ed0b")
    erb(:movie_details, locals: {
        title: result["Title"],
        language: result["Language"],
        year: result["Year"],
        rate: result["Rated"],
        genre: result["Genre"],
        director: result["Director"],
        actors: result["Actors"],
        plot: result["Plot"],
        poster: result["Poster"]
    })
end

get "/about" do
    erb(:about)
end


