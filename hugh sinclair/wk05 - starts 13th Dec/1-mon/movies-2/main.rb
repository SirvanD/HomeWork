require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


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





get '/search_results' do
    titles = params["titles"]
    url = "http://omdbapi.com/?s=#{titles}&apikey=c4c2784c"
    response = HTTParty.get(url)

    results = response["Search"]
        

    erb :search_results, locals: {
        results: results
    }
end
