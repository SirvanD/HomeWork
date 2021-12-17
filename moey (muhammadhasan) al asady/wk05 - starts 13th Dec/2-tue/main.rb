require 'sinatra'
require 'sinatra/reloader'



get '/' do
    erb(:index)
end

get '/0' do 

    erb(:no_beer)

end



get '/:number' do
    number = 99
    number = params["number"].to_i
    puts number
     if number == 99 
        redirect '/'
         
     elsif 
         number == 0
         redirect '/0'
     else 
        erb(:bottle_number, locals: {
            number:number
        })
     end

    
    # "#{number} BOTTLES OF BEER ON THE WALL"

    erb(:bottle_number, locals: {
        number: number
    })
end