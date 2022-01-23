require "sinatra"
require "sinatra/reloader"
# http://localhost:4567/
require "httparty"
# https://www.omdbapi.com/?s=#{title}s&apikey=6010dc57

get "/" do
    erb :index
end

get "/movie_details" do
    title = params["title"]
    url = "https://www.omdbapi.com/?t=#{title}&apikey=6010dc57"
    res = HTTParty.get(url)

    erb :movie_details, locals: {
        movie_name: res["Title"],
        movie_plot: res["Plot"],
        movie_date: res["Year"]
    }
end

get "/about" do
    erb :about
end

