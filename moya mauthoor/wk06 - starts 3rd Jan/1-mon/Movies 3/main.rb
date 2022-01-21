require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pg"
require "pry"

require_relative "models/movie.rb"

get "/" do
    erb(:index)
end

get "/movies" do
    movie = params["title"]

    url = "https://omdbapi.com/?s=#{ movie }&apikey=8f66dc3c#"
    res = HTTParty.get(url)
    movie_list = res["Search"]

    if movie_list.count == 1 
        movie = movie_list.first

        erb(:movie, locals: {
        movie: movie
        })
    else 
        erb(:movies, locals: {
        movie_list: movie_list
    })
        
    end

end

get "/movies/:omdb_id" do
     
    sql = "SELECT * FROM movies WHERE omdb_id = $1;"
    res = db_query(sql, [params["omdb_id"]])
  
    # if not in database, get from OMDB as below and store in database
    if res.count == 0
        url = "https://omdbapi.com/?i=#{ params["omdb_id"] }&apikey=8f66dc3c#"
        res = HTTParty.get(url)

        # storing the movie's details in database
        sql = "INSERT INTO movies (name, poster_url, plot, year, omdb_id) VALUES ($1, $2, $3, $4, $5);"

        db_query(sql, [
            res["Title"], 
            res["Poster"],
            res["Plot"],
            res["Year"],
            params["id"]
        ])
       
        erb(:movie, locals: {
            movie: res
        })
    else
        movie = res.first
        erb(:movie, locals: {
            movie: movie
        })
    end
   
end

