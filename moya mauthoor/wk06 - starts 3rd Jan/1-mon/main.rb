require 'httparty'
require "sinatra"
require "sinatra/reloader"
require "pry"

get "/" do
    erb(:index)
end

get "/search" do
    movie = params["title"]
    url = "https://omdbapi.com/?s=#{ movie }&apikey=8f66dc3c#"
    res = HTTParty.get(url)
    movie_list = res["Search"]

    if movie_list.length.to_i == 1 
        movie = movie_list[0]

        erb(:movie, locals: {
        title: movie["Title"],
        year: movie["Year"],
        plot: movie["Plot"],
        poster: movie["Poster"]
        })
    else 
        erb(:search_results, locals: {
        movie_list: movie_list
    })
        
    end

end

get "/movie" do
    movieID = params["id"]
    url = "https://omdbapi.com/?i=#{ movieID }&apikey=8f66dc3c#"
    res = HTTParty.get(url)

    erb(:movie, locals: {
        title: res["Title"],
        year: res["Year"],
        plot: res["Plot"],
        poster: res["Poster"]
    })
end