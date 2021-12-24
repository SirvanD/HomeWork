require 'httparty'
require "sinatra"
require "sinatra/reloader"
require "pg"
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

    # if already in database, use that data - search database here and return result
    conn = PG.connect( dbname: 'movies_app')
    sql = "SELECT * FROM movies WHERE omdb_id = '#{movieID}';"
    res = conn.exec(sql)

    conn.close

    # if not in database, get from OMDB as below and store in database
    if res.to_a.empty?
        url = "https://omdbapi.com/?i=#{ movieID }&apikey=8f66dc3c#"
        res = HTTParty.get(url)

        # storing the movie's details in database
        conn = PG.connect( dbname: 'movies_app')
        sql = "INSERT INTO movies (name, poster_url, plot, year, omdb_id) VALUES ('#{res["Title"]}', '#{res["Poster"]}', '#{res["Plot"]}', #{res["Year"]}, '#{movieID}');"
        conn.exec(sql)
        conn.close

        erb(:movie, locals: {
            title: res["Title"],
            year: res["Year"],
            plot: res["Plot"],
            poster: res["Poster"]
        })
    else
        movie = res[0]
        erb(:movie, locals: {
        title: movie["name"],
        year: movie["year"],
        plot: movie["plot"],
        poster: movie["poster_url"]
        })
    end
   
end