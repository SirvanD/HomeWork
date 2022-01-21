require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 


get '/' do 

    erb(:index)

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

get '/movie_details' do
    
    movie_input = params["movie_input"]
    url = "https://www.omdbapi.com/?t=#{movie_input}&apikey=6139fe0d"
    result = HTTParty.get(url)
    title = result["Title"]
    year = result["Year"]
    plot = result["Plot"]
    poster = result["Poster"]
    
    erb(:movie_details, locals: {
        movie_title: title,
        movie_year: year,
        movie_plot: plot,
        movie_poster: poster,
        test2: "HA HA HA"
    })

    

end
