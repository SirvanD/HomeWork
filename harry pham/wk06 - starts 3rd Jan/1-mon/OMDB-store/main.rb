require "sinatra"
require "sinatra/reloader"
# http://localhost:4567/
require "httparty"
# https://www.omdbapi.com/?s=#{title}s&apikey=6010dc57
# https://www.omdbapi.com/?t=#{title}&apikey=6010dc57
require 'pg'
require 'pry'

get "/" do
    

    erb :index
end

get "/movies/data" do
    title = params["title"]
 
    url = "https://www.omdbapi.com/?t=#{title}&apikey=6010dc57"
    res = HTTParty.get(url)
    conn = PG.connect(dbname: 'omdb_movies')

    sql_add = "insert into movies (title, date, plot, poster) values ('#{res["Title"]}','#{res["Date"]}','#{res["Plot"]}','#{res["Poster"]}');"
    sql = "select * from movies where title = '#{title}';"
    result = conn.exec(sql)
    conn.close
    if result.count > 0        
        
        erb :our_movie_data, locals: {
            movie_name: result[0]["title"],
            movie_plot: result[0]["plot"],
            movie_date: result[0]["year"],
            movie_poster: result[0]["poster"]
        }
    else
    conn = PG.connect(dbname: 'omdb_movies')
    sql_add = "insert into movies (title, date, plot, poster) values ('#{res["Title"]}','#{res["Year"]}','#{res["Plot"]}','#{res["Poster"]}');"
    conn.exec(sql_add)
    conn.close
        erb :movie_data, locals: {
            movie_name: res["Title"],
            movie_plot: res["Plot"],
            movie_date: res["Year"],
            movie_poster: res["Poster"]
        }
    end

end

get "/movies" do
    title = params["s"]    
    url = "https://www.omdbapi.com/?s=#{title}&apikey=6010dc57"
    res = HTTParty.get(url)


    erb :list, locals: {
        movie_search: res,

    }
end

# <a href="/movie_data?title=<%=movie["Title"]%>"><%=p movie["Title"]%></a>