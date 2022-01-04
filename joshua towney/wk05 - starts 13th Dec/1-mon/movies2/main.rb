require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'

get '/' do 

    "MOVIE DATABASE MAGIC"
    erb(:index)
end

get '/about' do
    "ABOUT"
    erb(:about)
end

get '/all_matches' do
    movie = params["movie"]
    url_list = "https://omdbapi.com/?s=#{movie}&apikey=ebc931bb"
    all_matches = HTTParty.get(url_list)
    search = all_matches["Search"]

    erb(:all_matches, locals: {
        all_matches: all_matches,
        search: search
    })
end

get '/movie_details' do
    "MOVIE DETAILS"

    conn = PG.connect(dbname: 'searched_movies')

    sql = "SELECT * from movies WHERE title = '#{params['movie']}';" # needs to be a string
    result = conn.exec(sql)

    if result.count > 0
        p result[0]
        title = result[0]["title"] # uses result instead of selected_movies
        year = result[0]["year"]
        poster = result[0]["poster"]
    else
        movie = params["movie"]
        url = "https://omdbapi.com/?t=#{movie}&apikey=ebc931bb"
        selected_movie = HTTParty.get(url)
        title = selected_movie["Title"]
        year = selected_movie["Year"]
        poster = selected_movie["Poster"]

        sql = "INSERT into movies (title, year, poster) VALUES ('#{title}','#{year}','#{poster}');"
        conn.exec(sql)
    end
    conn.close

    erb(:movie_details, locals: {
        title: title,
        year: year,
        poster: poster
    })

end

#     url_list = "https://omdbapi.com/?s=jaws&apikey=ebc931bb"
#     all_matches = HTTParty.get(url_list)
#     search = all_matches["Search"]
#     jaws = search[0]
#     search[i]["Title"]

# pry binding