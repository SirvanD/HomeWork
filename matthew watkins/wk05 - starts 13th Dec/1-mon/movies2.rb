require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
    erb :index
end

get '/about' do 
    erb :about
end

get '/movie_detail' do
    title = params["movie"]
    url = "http://omdbapi.com/?s=#{title}&apikey=2f6435d9"
    result = HTTParty.get(url)
    # puts params
    # p result
    erb :movie_detail, locals: {
        result: result,
        url: result,
        title: result["Title"],
        plot: result["Plot"],
        poster: result["Poster"], 
        year: result["Year"]
    }
end

get "/movie_information" do 
    title = params["title"]
    url = "http://omdbapi.com/?t=#{title}&apikey=2f6435d9"
    result = HTTParty.get(url)
    # puts params
    # p result
    erb :movie_information, locals: {
        result: result,
        url: result,
        title: result["Title"],
        plot: result["Plot"],
        poster: result["Poster"], 
        year: result["Year"]

}
end