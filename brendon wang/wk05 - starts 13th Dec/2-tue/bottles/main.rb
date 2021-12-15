     
require 'sinatra'
require "sinatra/reloader"

get '/:number' do
  number = params["number"]
  erb(:index, locals:{
    number: number,
  })
end





