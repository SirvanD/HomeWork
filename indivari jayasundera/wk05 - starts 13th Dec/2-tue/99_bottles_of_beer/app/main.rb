     
require 'sinatra'
require 'sinatra/reloader'

# counter = 99
get '/' do
  counter = 99
  erb(:index, locals:{
    counter:counter
  })
end

get "/:counter" do 
 counter = params["counter"].to_i

 erb(:counter, locals: {
   counter:counter
 })
end






