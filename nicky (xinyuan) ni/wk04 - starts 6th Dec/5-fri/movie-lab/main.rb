require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb(:index, locals: { 
    intro: "You can find your favorite movie poster here!"  
  })

end

get '/movie' do
    ticker = params["ticker"]
    url = 'http://omdbapi.com/?t='+ ticker +'&apikey=2f6435d9'
    res = HTTParty.get(url)

    title = res["Title"]
    year = res["Year"]
    genre = res["Genre"]
    director = res["Director"]
    plot = res["Plot"]
    poster = res["Poster"]

    erb(:movie_details, locals: {
        title: title,
        year: year,
        genre: genre,
        director: director,
        plot: plot,
        poster: poster
    })
end
  
get '/about' do
    erb(:about)
end