require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get "/" do
    erb(:index, {:layout =>:layout}) 
end

get "/search" do
    url = "http://omdbapi.com/?s=#{params["title"]}&apikey=2c6318ac"
    results = HTTParty.get(url)
    search = results["Search"]
    erb(:search, locals: {
        search: search
    })
end

get "/movie_details" do
    url = "http://omdbapi.com/?t=#{params["movie_title"]}&apikey=2c6318ac"
    res = HTTParty.get(url)
    title = res["Title"]
    year = res["Year"]
    poster = res["Poster"]
    plot = res["Plot"]

    erb(:movie_details, locals: {
        m_title: title,
        release_year: year,
        poster: poster,
        plot: plot
    })
    end


get "/about" do
    erb(:about)
end