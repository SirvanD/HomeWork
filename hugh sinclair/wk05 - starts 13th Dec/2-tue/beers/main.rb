     
require 'sinatra'

get '/' do



  erb :index, locals:{
    beers: 98
  }
end


get '/:beers' do

  beers = (params["beers"].to_i - 1)

  erb :beers, locals:{
    beers: beers
  }
end


