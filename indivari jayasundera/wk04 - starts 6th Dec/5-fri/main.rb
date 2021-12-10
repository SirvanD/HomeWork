require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

get '/' do 
    erb(:index, { :layout => :layout })
end

get '/movie_details' do 
    movie = params["movie"]
    url = "https://omdbapi.com/?t=#{movie}&apikey=2f6435d9"
    res = HTTParty.get(url)
    
    title = res["title"]
    year = res ["year"]
   
    erb(:movie_details, locals: {
        title:title,
        year:year
    })
end

get '/about' do 
    erb(:about)
end