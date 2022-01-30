require 'sinatra' # what runs the Sinatra web framework that allows us to receive requests and provide responses.
require 'sinatra/reloader' # doesn't reload the page automatically, instead it reloads the code in the main.rb file every time a page refresh happens.
require 'httparty' # yes it allows us to access movie database, but more specifically httparty allows us to make a request to any web address. We happen to use it to make a request to the OMDB API website to retrieve JSON data about a movie.


get '/' do
    "Welcome to movies are us"

    erb(:index)
end

get'/about' do
    "This is the About section"

    erb(:about)
end

get '/movie_details' do
    movie = params["movie"] #params[""] gets thrown into the url at the selected spot to give a complete url when searching a movie KASUN accesses the value inside a query parameter named movie in the web url.
    url = "https://omdbapi.com/?t=#{movie}&apikey=ebc931bb" #url variable. DOUBLE QUOTES needed. Parameter set up after = as #{} KASUN - double quotes needed cause we're using string interpolation to embed the movie variable inside the string.

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