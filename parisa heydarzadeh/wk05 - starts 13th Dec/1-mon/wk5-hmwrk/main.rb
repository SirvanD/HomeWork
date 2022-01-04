require 'httparty'
require 'sinatra'
require 'sinatra/reloader'


get '/' do
    erb(:index)

end

    get '/movie_details' do

        movie_title=params["title"]
        url = "http://www.omdbapi.com/?t=#{movie_title}&apikey=890ff11d"
        url = "http://www.omdbapi.com/?t=#jaws&apikey=890ff11d"
        res = HTTParty.get(url)
        puts res
    
    erb(:movie_details, locals: {
        movie_title: res["Title"],
        movie_year: res["Year"],
        movie_image: res["Poster"]
    })
    end

get '/movie_list' do


    movie_search = params["movie_search"]
    url = "https://www.omdbapi.com/?s=#{movie_search}&apikey=890ff11d"
    res = HTTParty.get(url)
    title = res["Title"],
    movie_search = res["Search"],
    search = movie_search
   

    erb(:movie_list, locals: {
        movie_title: title,
        movie_list: movie_search,
        
    })
end