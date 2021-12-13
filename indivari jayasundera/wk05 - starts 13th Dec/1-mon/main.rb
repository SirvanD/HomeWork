require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

get '/' do 
    erb(:index, { :layout => :layout })
end

get '/movie_list' do 
    movie = params["movie"]
    url = "https://omdbapi.com/?s=#{movie}&apikey=2f6435d9"
    res = HTTParty.get(url)
    
     movie_array = res["Search"]
   
    erb(:movie_list, locals: {
movie_array:movie_array
    })
end

get '/about' do 
    erb(:about)
end