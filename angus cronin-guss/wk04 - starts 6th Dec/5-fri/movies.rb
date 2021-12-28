require 'httparty'
require 'sinatra'
require 'sinatra/reloader'


url = "http://omdbapi.com/&apikey=2f6435d9"


get '/' do 
    erb(:index, locals:{
    })
end

get '/about' do 
    erb :about
end

get "/movies/:title" do 
    movie_title = params[:Title]
    result = HTTParty.get(url)
   
   
    erb :movie_details
end
