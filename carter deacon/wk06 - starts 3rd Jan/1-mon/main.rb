#  If you want OMDB API to return a list of matching movies based on a search term. Change the query string paramter from t=jaws to s=jaws

require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"
require "pg"

# JSON files: http://www.omdbapi.com/?apikey=2f6435d9&t=
# Poster requests: http://img.omdbapi.com/?apikey=2f6435d9&t=

get '/' do
    erb :index
end

get '/movies' do
    input = params['search_title']
    url = "http://www.omdbapi.com/?s=#{input}&apikey=2f6435d9"
    list = HTTParty.get(url)
    erb :search, locals: {
        results: list["Search"]
    }
end

get '/movie' do
    input = params['t'].gsub("'", "")
    conn = PG.connect(dbname: 'movies')
    sql = "SELECT * FROM movies WHERE TITLE = '#{input}';"
    search_local = conn.exec(sql)
    if search_local.count > 0 
        title = search_local[0]["title"].gsub("'", "")
        year = search_local[0]["year"]
        poster = search_local[0]["poster"]
        puts "Got it locally"
    else 
        url = "http://www.omdbapi.com/?apikey=2f6435d9&t=#{input}"
        result = HTTParty.get(url)
        title = result["Title"]
        year = result["Year"]
        poster = result["Poster"]
        plot = result["Plot"]
        push_sql = "INSERT INTO movies (title, year, poster) VALUES ('#{title}', '#{year}', '#{poster}');"
        conn.exec(push_sql)
        puts "Got it online"
    end
    conn.close
    erb :movie_details, locals: {
        title: title, 
        year: year,
        poster: poster,  
        plot: plot
    }
end

get '/about' do
    erb :about
end