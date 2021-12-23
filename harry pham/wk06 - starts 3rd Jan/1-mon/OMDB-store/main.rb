require "sinatra"
require "sinatra/reloader"
# http://localhost:4567/
require "httparty"
# https://www.omdbapi.com/?s=#{title}s&apikey=6010dc57
# https://www.omdbapi.com/?t=#{title}&apikey=6010dc57
require 'pg'


get "/" do
    

    erb :index
end

get "/movie_data" do
    title = params["title"]
    url = "https://www.omdbapi.com/?t=#{title}&apikey=6010dc57"
    res = HTTParty.get(url)

    conn = PG.connect(dbname: 'omdb_movies')
    sql = 'select * from movies'
    






    erb :movie_data, locals: {
        movie_name: res["Title"],
        movie_plot: res["Plot"],
        movie_date: res["Year"],
        movie_poster: res["Poster"]
    }
end

get "/list" do
    title = params["s"]    
    url = "https://www.omdbapi.com/?s=#{title}&apikey=6010dc57"
    res = HTTParty.get(url)


    erb :list, locals: {
        movie_search: res,

    }
end
