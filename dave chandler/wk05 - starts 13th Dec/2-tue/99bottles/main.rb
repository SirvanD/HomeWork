require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'json'
require 'pry'

get '/' do
  num_bottles = 99
  erb(:index, locals: {
        bottles: num_bottles
      })
end

get '/:bottles' do
  num_bottles = params['bottles'].to_i
  message = 'Bottles of beer on the wall'
  link = "<a href='/#{num_bottles - 1}'>take one down</a>"

  if num_bottles == 1
    message = 'Bottle of beer on the wall'
  elsif num_bottles == 0
    message = 'No Bottles of beer on the wall'
    link = "<a href='/99'>start over?</a>"
  end
  erb(:index, locals: {
        bottles: num_bottles,
        message: message,
        user_link: link
      })
end
