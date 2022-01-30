     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  number_of_beers = 99
  erb :index, locals: {
  number: number_of_beers
  }

end

get '/:number' do 
  number_of_beers = params["number"].to_i
  erb :number, locals: {
    number: number_of_beers
  }
end






