require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'json'
require 'pry'

get '/' do
  array = %w[
    msft
    tsla
    aapl
  ]
  erb(:index, locals: {
        tickers: array
      })
end

get '/movie_details' do
  movie_title = params['title']
  response = nil
  url = "http://www.omdbapi.com/?s=#{movie_title}&apikey=1e36cb2c"
  res = HTTParty.get(url, stream_body: true)

  fetched_title = res['Title']
  year = res['Year']
  poster = res['Poster']

  erb(:movie_details, locals: {
        title: fetched_title,
        year: year,
        poster_url: poster
      })
end
