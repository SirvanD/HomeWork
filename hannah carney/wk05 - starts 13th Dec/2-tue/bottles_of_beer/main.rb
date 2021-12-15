     
require 'sinatra'

get '/' do
  'hello world'
  number = params["number"]
  
  erb :index
end


