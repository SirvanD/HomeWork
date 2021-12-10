require 'httparty'
require 'sinatra'
require 'sinatra/reloader' # reloads ur code so you dont need to stop theprogram each time 


get '/' do 
    
    erb :index
    
end 


get '/about' do
    
    erb :about
    
end


get '/movie_details' do
    input_title = params['input_title']
    url = "http://www.omdbapi.com/?t=#{input_title}&apikey=2f6435d9"
    res = HTTParty.get(url)

    erb :movie_details, locals: {
        title: res["Title"],
        plot: res["Plot"],
        poster: res["Poster"]
    }
end    

