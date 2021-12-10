require 'sinatra' #lets up develop web app
require 'sinatra/reloader' #reloads the page automatically so that we don;t need to reset the server 
require 'httparty' #so we can access movie database


get '/' do
    "Welcome to movies are us"

    erb(:index)
end

get'/about' do
    "This is the About section"

    erb(:about)
end

get '/movie_details' do
    movie = params["movie"] #params[""] gets thrown into the url at the selected spot to give a complete url when searching a movie
    url = "https://omdbapi.com/?t=#{movie}&apikey=ebc931bb" #url variable. DOUBLE QUOTES needed. Paramter set up after = as #{}

    res = HTTParty.get(url) #variable. Url is dependent on the inut above

    title = res["Title"] #setting up variable names for easy access later
    year = res["Year"]
    poster = res["Poster"]

    erb(:movie_details, locals: {  #erb :movie_details links to the movie_details erb file once we are on /movie_details
                        #locals lets us use the below variables on that page when caling in crab claws
        title: title,
        year: year,
        poster: poster
    })

end