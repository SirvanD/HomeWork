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

get '/search' do
    input = params['search_title']
    url = "http://www.omdbapi.com/?s=#{input}&apikey=2f6435d9"
    list = HTTParty.get(url)
    erb :search, locals: {
        results: list["Search"]
    }
end

get '/movie_details' do
    input = params['t']
    url = "http://www.omdbapi.com/?apikey=2f6435d9&t=#{input}"
    result = HTTParty.get(url)
    conn = PG.connect(dbname: 'movies')
    # To insert to SQL but also need it to check before insertion. Maybe an if to check and then insert or just select?
    sql = "INSERT INTO movies (title, year, poster) VALUES ('#{result["Title"]}', '#{result["Year"]}', '#{result["Poster"]}');"
    search_result = "SELECT FROM movies WHERE TITLE = '#{input}';"
    conn.exec(sql)
    conn.close
    erb :movie_details, locals: {
        title: result["Title"], 
        year: result["Year"],
        poster: result["Poster"],  
        plot: result["Plot"]
    }
end

get '/about' do
    erb :about
end