require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'






get '/' do
    erb(:index)
  end



get '/movie_details' do
    
    res = HTTParty.get(url)
    url = "http://www.omdbapi.com/?t=#{movie_title}&apikey=890ff11d"
    movie_title = params["title"]
    title = res["title"]
    year = res["Year"]
    plot = res["Plot"]
    image = res["Image"]
    

  erb(:movie_details, locals: {
      movie_title: title,
      movie_year: year,
      movie_plot: plot,
      movie_image: image

  })

end

get '/about' do

    erb(:about)
end




# 'binding pry'