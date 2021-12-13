require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb(:index, { :layout => :layout })
end


get '/about' do
    erb(:about)
end

get '/movies' do
    title = params['title']
    result = HTTParty.get("http://omdbapi.com/?s=#{title}&apikey=2f6435d9")

    movie_titles = result

    erb(:movies, locals: {
        movie_titles: movie_titles
    })
end

get '/movie_details' do
    title = params['title']
    result = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=2f6435d9")

    title = result["Title"]
    year = result["Year"]
    poster = result["Poster"]
    plot = result['Plot']

    erb(:movie_details, locals: {
        title: title,
        year: year,
        poster: poster,
        plot: plot
    })
end





