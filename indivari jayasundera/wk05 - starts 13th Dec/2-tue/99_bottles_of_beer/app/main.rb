     
require 'sinatra'
require 'sinatra/reloader'

counter = 99
get '/' do
  erb :index
end

get "/:counter" do 
 counter = counter -1
 erb(:counter, locals: {
   counter:counter
 })
end






