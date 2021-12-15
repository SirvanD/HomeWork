     
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  num_of_bottle = 99

  erb(:index, locals: {
    num_of_bottle: num_of_bottle
  })
end

get '/:num_of_bottle' do
  num_of_bottle = params['num_of_bottle']
  
  num_of_bottle = num_of_bottle.to_i
  take_one_bottle = num_of_bottle - 1
  
  erb(:bottle, locals: {
    num_of_bottle: num_of_bottle,
    take_one_bottle: take_one_bottle
  })
end





# the method pass is a dynamic number from 0-99
# the link connects to the next page or
# number get decremented




