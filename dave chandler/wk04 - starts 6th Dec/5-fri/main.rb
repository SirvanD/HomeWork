require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'json'
require 'pry'

get '/' do
  erb(:index)
end

get '/movie_details' do
  movie_title = params['title']
  response = nil
  url = "http://www.omdbapi.com/?t=#{movie_title}&apikey=1e36cb2c"
  res = HTTParty.get(url, stream_body: true)
  body = JSON.parse(res.body)

  fetched_title = body['Title']
  year = body['Year']
  poster = body['Poster']

  erb(:movie_details, locals: {
        title: fetched_title,
        year: year,
        poster_url: poster
      })
end
