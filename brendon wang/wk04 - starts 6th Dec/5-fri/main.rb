require "httparty"
require "sinatra"
require "sinatra/reloader"

get "/" do
    erb(:index)
end

get "/donate" do
    erb("please donate $$$$")
end

get "/about" do
    erb(:about)
end

get "/movie_details" do
    the_movie = params["movie11"]
    url = "http://omdbapi.com/?t=#{the_movie}=&apikey=9be659e0"
    res = HTTParty.get(url)
    movie_title = res["Title"]
    movie_poster = res["Poster"]
    erb(:movie_details, locals:{
        res: res,
        movie_title: movie_title,
        movie_poster: movie_poster,
    })
end

