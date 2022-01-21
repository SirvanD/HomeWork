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
    if search[1] != nil
        erb(:search, locals: {
        search: search,
        })
    else
        redirect "/movie_details?title=#{params["title"]}"
        # url = "http://omdbapi.com/?t=#{params["title"]}&apikey=2c6318ac"
        # results = HTTParty.get(url)
        # title = results["Title"]
        # year = results["Year"]
        # poster = results["Poster"]
        # plot = results["Plot"]

        # erb(:movie_details, locals: {
        #     title: title,
        #     release_year: year,
        #     poster: poster,
        #     plot: plot
        # })
    end
end

get "/movie_details" do
    url = "http://omdbapi.com/?t=#{params["title"]}&apikey=2c6318ac"
        results = HTTParty.get(url)
        title = results["Title"]
        year = results["Year"]
        poster = results["Poster"]
        plot = results["Plot"]

        erb(:movie_details, locals: {
            title: title,
            release_year: year,
            poster: poster,
            plot: plot
        })
end

get "/about" do
    erb(:about)
end
