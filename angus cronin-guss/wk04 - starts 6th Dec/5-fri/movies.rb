require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

url = 'http://www.omdbapi.com/?i=tt3896198&apikey=ffba863'

res = HTTParty.get(url)

get '/' do 
    erb(:index, locals:{

    })

