require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do 
    erb(:index, {:layout => :layout})
end


get '/movie' do


    movie_title = params["ticker"]
    url = "http://omdbapi.com/?t=#{movie_title}&apikey=2f6435d9"

    res = HTTParty.get(url)
    puts res

    erb(:movie, locals: {
        title: res["Title"],
        year: res["Year"],
        poster: res["Poster"]
        # title: Title,

    })


    # puts res["Title"]
    # puts res["Year"]
end

get '/list' do 

    rb(:list, locals: {
        title: res["Title"],
        

    })
end


