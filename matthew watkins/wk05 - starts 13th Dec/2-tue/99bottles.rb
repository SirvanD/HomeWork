require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do 

    erb :index, locals: {

    }
end

get /'0' do
    
    erb :index, locals: {

    }
end