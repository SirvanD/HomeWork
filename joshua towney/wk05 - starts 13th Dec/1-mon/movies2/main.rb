require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
# require 'pry'

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

    movie = params["movie"]
    url = "https://omdbapi.com/?t=#{movie}&apikey=ebc931bb"
    selected_movie = HTTParty.get(url)
    title = selected_movie["Title"]
    year = selected_movie["Year"]
    poster = selected_movie["Poster"]

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