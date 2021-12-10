require 'httparty'
require 'sinatra'
require 'sinatra reloader'


res = HTTParty.get('http://omdbapi.com/?t=sharknado&apikey=2f6435d9')