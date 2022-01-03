require 'sinatra/reloader'     
require 'sinatra'
require 'httparty'

get '/' do
  erb :index
end

get "/movies/:title" do 
  movie_title = params['movie_title']
  url = "http://www.omdbapi.com/?s=#{movie_title}&apikey=2f6435d9"
  result = HTTParty.get(url)
  title = result['Title']
 
  erb :show, locals: {result: result, title: title}
end




