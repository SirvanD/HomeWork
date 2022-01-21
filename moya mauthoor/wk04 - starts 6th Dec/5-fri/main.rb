require 'httparty'
require "sinatra"
require "sinatra/reloader"


get "/" do
    erb(:index)
   
end

get "/about" do
    erb(:about)
end

get "/movie-details" do
    movie = params["title"]
    url = "https://omdbapi.com/?t=#{ movie }&apikey=8f66dc3c#"
    res = HTTParty.get(url) 

    erb(:movie_details, locals: {
        title: res["Title"],
        year: res["Year"],
        plot: res["Plot"],
        poster: res["Poster"]
    })
end