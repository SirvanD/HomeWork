require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get "/" do
    erb(:index, {:layout =>:layout}) 
end


get "/search" do
    url = "http://omdbapi.com/?s=#{params["title"]}&apikey=2c6318ac"
    $results = HTTParty.get(url)
    $search = $results["Search"]

    erb(:search, locals: {
        search: $search,
    })
end

get "/about" do
    erb(:about)
end

# below not working
# get "/movie_details" do
    # url = "http://omdbapi.com/?t=#{params["title"]}&apikey=2c6318ac"
    # title = $search["Title"]
    # year = $search["Year"]
    # poster = $search["Poster"]
    # plot = $search["Plot"]

    # erb(:movie_details, locals: {
    #     search: $search
    #     m_title: title,
    #     release_year: year,
    #     poster: poster,
    #     plot: plot
    # })
# end


