require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

get '/' do 
    erb(:index, {:layout => :layout})
end

get '/about' do 
    erb(:about)
end


get '/movie_list' do


    movie_search = params["movie_search"]
    url = "https://www.omdbapi.com/?s=#{movie_search}&apikey=6139fe0d"
    result = HTTParty.get(url)
    title = result["Title"],
    movie_search = result["Search"],
    search = movie_search[0]

    erb(:movie_list, locals: {
        movie_list: movie_search,
        movie_title: title,
        search: search,
        title: title
        
        
    })



end


get '/movie' do


    movie_title = params["movie_input"]
    url = "http://omdbapi.com/?t=#{movie_title}&apikey=2f6435d9"

    res = HTTParty.get(url)
    
    erb(:movie, locals: {
        title: res["Title"],
        year: res["Year"],
        poster: res["Poster"]

    })


    # puts res["Title"]
    # puts res["Year"]
end




