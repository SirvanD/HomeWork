require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



get '/' do
    
    erb :index
end

get '/movie' do
    title = params["title"]
    url = "http://omdbapi.com/?t=#{title}&apikey=c4c2784c"
    result = HTTParty.get(url)

    erb :movie_details, locals:{
        title: result["Title"],
        year: result["Year"],
        poster: result["Poster"],
        plot: result["Plot"]
    }

end

get '/about' do
    
    erb :about
end