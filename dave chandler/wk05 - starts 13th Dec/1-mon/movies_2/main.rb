require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'json'
require 'pry'

get '/' do
  address_bar_params = params['name']

  array = %w[
    msft
    tsla
    aapl
  ]
  erb(:index, locals: {
        tickers: array
      })
end

get '/q' do
  search_term = params['s']
  response = nil
  url = "http://www.omdbapi.com/?s=#{search_term}&apikey=1e36cb2c"
  res = HTTParty.get(url, stream_body: true)

  if res['totalResults'].to_i != 1
    erb(:search_result, locals: {
          search_result: res['Search'],
          total_found: res['totalResults']
        })
  else
    puts 'here her her here here here'
    title = res['Search'][0]['Title']
    url = "http://www.omdbapi.com/?t=#{title}&apikey=1e36cb2c"
    res = HTTParty.get(url, stream_body: true)

    erb(:movie_details, locals: {
          movie: res
        })
  end
end

get '/movie_details' do
  title = params['t']
  response = nil
  url = "http://www.omdbapi.com/?t=#{title}&apikey=1e36cb2c"
  res = HTTParty.get(url, stream_body: true)

  erb(:movie_details, locals: {
        movie: res
      })
end
