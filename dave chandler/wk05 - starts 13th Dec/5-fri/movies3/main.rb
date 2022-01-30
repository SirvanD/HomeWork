require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'json'
require 'pry'
require 'pg'
require 'date'

get '/' do
  erb(:index)
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
    title = res['Search'][0]['Title']
    res = getMovie(title)
    erb(:movie_details, locals: {
          movie: res,
          source: $source
        })
  end
end

//
get '/movie_details' do
  title = params['t']

  res = getMovie(title)
  erb(:movie_details, locals: {
        movie: res,
        source: $source
      })
end

def getMovie(title)
  url = "http://www.omdbapi.com/?t=#{title}&apikey=1e36cb2c"

  # instantiate dbase connect because it may be needed to insert
  local_psql = "SELECT * FROM movie_details WHERE \"Title\"='#{title}';"
  local_res = PG.connect(dbname: 'movies')
  res = local_res.exec(local_psql)

  # set this to local by default
  $source = 'local'

  # test if available locally to save OMDB call
  if res.ntuples.zero?
    res = HTTParty.get(url, stream_body: true)
    $source = 'remote'
    # escape any strings that could have a ' in them
    local_psql = "INSERT INTO movie_details (
      \"Title\",
      \"Poster\",
      \"Released\",
      \"Actors\",
      \"Runtime\",
      \"Director\",
      \"Plot\",
      \"Rated\",
      \"Writer\",
      \"Genre\"
    )
      VALUES (
      '#{res['Title'].gsub("'", "''")}',
      '#{res['Poster']}',
      '#{res['Released']}',
      '#{res['Actors'].gsub("'", "''")}',
      '#{res['Runtime']}',
      '#{res['Director'].gsub("'", "''")}',
      '#{res['Plot'].gsub("'", "''")}',
      '#{res['Rated']}',
      '#{res['Writer'].gsub("'", "''")}',
      '#{res['Genre'].gsub("'", "''")}'
      )"
    local_res.exec(local_psql)
  else
    puts res[0]
    res = res[0]
  end
  res
end
