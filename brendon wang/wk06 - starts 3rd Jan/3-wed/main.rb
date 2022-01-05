require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pg"

$latest_posters = []
def latest_posters(movie_poster)
    $latest_posters.unshift(movie_poster)
    if $latest_posters.length > 5
        $latest_posters.pop()
    end
end

def search_movie(movie_name)
    url = "http://omdbapi.com/?t=#{movie_name}=&apikey=9be659e0"
    movie_data = HTTParty.get(url)
    return movie_data
end

def search_all_movies(movie_name)
    url = "http://omdbapi.com/?s=#{movie_name}=&apikey=9be659e0"
    movie_list = HTTParty.get(url)
    return movie_list
end

def db_query(sql, params = [])
    conn = PG.connect(dbname: 'omdbmovies3')
    results = conn.exec_params(sql, params)
    conn.close
    return results
end

def create_movie(title, poster)
    sql = 'insert into movies (title, poster) values ($1, $2)'
    db_query(sql, [title, poster])
end

get "/" do 
    erb(:index, locals:{
        latest_posters: $latest_posters
    })
end

get "/about" do 
    erb(:about)
end

get "/search" do
    movie_list = search_all_movies(params["movie_name"])
    if movie_list["Search"].length == 1    
        movie_poster = movie_list["Search"][0]["Poster"]
        erb(:moviedata, locals: {
        movie_name: movie_name,
        movie_poster: movie_poster,
        })
    else
    erb(:moviesearch, locals: {
        movie_list: movie_list,
    })
    end
end

get "/moviedata" do
    movie_name = params["movie"] 
    movie_data = db_query('select * from movies where title = $1', [movie_name]).first
    if movie_data == nil 
        movie_data = search_movie(movie_name)
        movie_poster = movie_data["Poster"]
        latest_posters(movie_poster)
        create_movie(movie_data["Title"], movie_poster)
    else
        movie_poster = movie_data["poster"]
        latest_posters(movie_poster)
    end
    erb(:moviedata, locals: {
        movie_name: movie_name,
        movie_poster: movie_poster,
    })
end