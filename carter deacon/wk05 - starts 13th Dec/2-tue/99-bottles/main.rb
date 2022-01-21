require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
    number = 99
    erb(:number, locals: {number: number})
end

get '/:number' do
    number = params["number"]
    if number == nil or number == ''
        "99 bottles of beer on the wall."
    end
    erb(:number, locals: {number: number})
end