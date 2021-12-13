require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'






get '/' do
    erb(:index)
  end



get '/movie_details' do
    movie_title = params["title"]
    
    url = "http://www.omdbapi.com/?t=#{movie_title}&apikey=890ff11d"
    res = HTTParty.get(url)
    puts res
    

  erb(:movie_details, locals: {
      movie_title: res["Title"],
      movie_year: res["Year"],

      movie_plot: res["Plot"],
      movie_image: res["Poster"]

  })

end

get '/about' do

    erb(:about)
end




# 'binding pry'