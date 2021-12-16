require 'sinatra'
require 'sinatra/reloader'



get '/' do
    "99 BOTTLES OF BEER ON THE WALL"
    erb(:index, layout: :layout)
end

get '/0' do 

    erb(:no_beer)

end

get '/:number' do
    number = 99
    number = params["number"]
    
    "#{number} BOTTLES OF BEER ON THE WALL"

    erb(:bottle_number, locals: {
        number: number
    })
end