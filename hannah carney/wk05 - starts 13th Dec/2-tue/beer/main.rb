require 'sinatra'
require 'sinatra/reloader'


get '/' do
    num_of_beers = 99

    "99 BOTTLES OF BEER ON THE WALL"

    erb(:index, locals: {
        number: num_of_beers
    })
end

get '/:number' do
    num_of_beers = params["number"].to_i
    
    erb(:number, locals: {
        number: num_of_beers
    })
end