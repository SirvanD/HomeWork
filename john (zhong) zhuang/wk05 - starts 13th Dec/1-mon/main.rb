require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 


get "/" do
    erb(:index)
end

get "/movie" do
    title = params["title"].to_s
    movie = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=89b0ed0b")

    erb(:movie_details, locals: {
        title: movie["Title"],
        language: movie["Language"],
        year: movie["Year"],
        rate: movie["Rated"],
        genre: movie["Genre"],
        director: movie["Director"],
        actors: movie["Actors"],
        plot: movie["Plot"],
        poster: movie["Poster"]
    })
end


get "/search" do
    title = params["title"].to_s
    results = HTTParty.get("http://omdbapi.com/?s=#{title}&apikey=89b0ed0b")


    erb(:search, locals: {
        results: results
    })
end

get "/about" do
    erb(:about)
end


