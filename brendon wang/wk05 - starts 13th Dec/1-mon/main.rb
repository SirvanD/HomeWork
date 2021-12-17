require "sinatra"
require "sinatra/reloader"
require "httparty"

$latest_posters = []

get "/" do 
    erb(:index, locals:{
        latest_posters: $latest_posters
    })
end

get "/about" do 
    erb(:about)
end

get "/search" do
    movie_name = params["movie_name"]
    movie_list_url = "http://omdbapi.com/?s=#{movie_name}=&apikey=9be659e0"
    movie_list = HTTParty.get(movie_list_url)
    if movie_list["Search"].length == 1    
        movie_poster = movie_list["Search"][0]["Poster"]
        erb(:moviedata, locals: {
        movie_name: movie_name,
        movie_poster: movie_poster,
        })
    else
    erb(:moviesearch, locals: {
        movie_list: movie_list,
    })
    end
end

get "/moviedata" do
    movie_name = params["movie"]
    movie_name_url = "http://omdbapi.com/?t=#{movie_name}=&apikey=9be659e0"
    movie_data = HTTParty.get(movie_name_url)
    movie_poster = movie_data["Poster"]
    $latest_posters.unshift(movie_poster)
    if $latest_posters.length > 5
        $latest_posters.pop()
    end
    erb(:moviedata, locals: {
        movie_name: movie_name,
        movie_poster: movie_poster,
    })
end




