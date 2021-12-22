require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 
require 'pg'


get "/" do
    erb(:index)
end

get "/search" do
    title = params["title"].to_s
    results = HTTParty.get("http://omdbapi.com/?s=#{title}&apikey=89b0ed0b")

    if results["Response"] == "False"
        movie = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=89b0ed0b")
        if movie["Response"] == "False"
            error =  "Sorry, the movie you searched has not been filmed yet."
        else 
            redirect "/movie?title=#{title}"
        end
    end
        
    erb(:search, locals: {
        results: results,
        error: error
    })
end

get "/movie" do
    title = params["title"].to_s
    movie = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=89b0ed0b")

    conn = PG.connect(dbname: 'movies_app')
    sql = "select * from movies where imdbid = '#{movie["imdbID"]}';"

    if conn.exec(sql).first == nil
        conn.exec("INSERT INTO movies (title, language, year, rate, director, actors, plot, poster, imdbid) VALUES ('#{movie['Title'].gsub("'", "''")}','#{movie['Language']}', '#{movie['Year']}', '#{movie['Rated']}', '#{movie['Director'].gsub("'", "''")}', '#{movie['Actors'].gsub("'", "''")}', '#{movie['Plot'].gsub("'", "''")}', '#{movie['Poster']}','#{movie["imdbID"]}');")
    else 
        localMovie = conn.exec(sql)[0]
    end

    conn.close

    erb(:movie_details, locals: {
        movie: movie,
        localMovie: localMovie
    })
end


get "/about" do
    erb(:about)
end