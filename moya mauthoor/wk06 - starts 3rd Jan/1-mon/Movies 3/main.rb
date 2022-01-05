require 'httparty'
require "sinatra"
require "sinatra/reloader"
require "pg"
require "pry"

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

get "/movies/:id" do
    
    movie_imdb_id = params["id"]

    # if already in database, use that data - search database here and return result
    
    conn = PG.connect( dbname: 'movies_app')
    sql = "SELECT * FROM movies WHERE omdb_id = '#{ movie_imdb_id }';"
    res = conn.exec(sql)
    conn.close

    # if not in database, get from OMDB as below and store in database
    # I think this should be a post route instead? But I'm not sure how to redirect to a post route from another route.
    if res.count == 0
        url = "https://omdbapi.com/?i=#{ movie_imdb_id }&apikey=8f66dc3c#"
        res = HTTParty.get(url)

        # storing the movie's details in database
        conn = PG.connect( dbname: 'movies_app')
        sql = "INSERT INTO movies (name, poster_url, plot, year, omdb_id) VALUES ('#{res["Title"]}', '#{res["Poster"]}', '#{res["Plot"]}', #{res["Year"]}, '#{movie_imdb_id}');"
        conn.exec(sql)
        conn.close

        erb(:movie, locals: {
            title: res["Title"],
            year: res["Year"],
            plot: res["Plot"],
            poster: res["Poster"]
        })
    else
        movie = res.first
        erb(:movie, locals: {
        title: movie["name"],
        year: movie["year"],
        plot: movie["plot"],
        poster: movie["poster_url"]
        })
    end
   
end

