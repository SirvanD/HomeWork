require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb(:index, { :layout => :layout })
end


get '/about' do
    erb(:about)
end

get '/movies' do
    title = params['title']
    result = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=2f6435d9")

    title = result["Title"]
    year = result["Year"]
    poster = result["Poster"]

    erb(:movie_details, locals: {
        title: title,
        year: year,
        poster: poster
    })

end





