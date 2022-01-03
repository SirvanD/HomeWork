require 'httparty'
require 'sinatra'
require 'sinatra/reloader'



 


get '/' do 
    erb(:index, locals:{
    })
end

get '/about' do 
    erb :about
end

get "/movies/:title" do 
    movie_title = params['movie_title']
    url = "http://www.omdbapi.com/?t=#{movie_title}&apikey=2f6435d9"
    result = HTTParty.get(url)
    title = result['Title']
    

   
    erb :movie_details, locals: {result: result, title: title}
end
