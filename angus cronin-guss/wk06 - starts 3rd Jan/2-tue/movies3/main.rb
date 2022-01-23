require 'sinatra/reloader'     
require 'sinatra'
require 'httparty'
require 'pg'
require 'pry'

get '/' do
  erb :index
end

get "/movies" do 
  movie_title = params['movie_title']
  url = "http://www.omdbapi.com/?s=#{movie_title}&apikey=2f6435d9"
  result = HTTParty.get(url)
 
  erb :show, locals: {result: result}
end



get "/fullmovie/:id" do 
  full_movie = params["id"]

  url = "http://www.omdbapi.com/?i=#{full_movie}&apikey=2f6435d9"
  res = HTTParty.get(url)
  title = res['Title']
  year = res['Year']
  image = res['Poster']

  conn = PG.connect(dbname: 'omdbmovies')
  sql = "select * from movies where imdbid = '#{full_movie}';"
  result = conn.exec(sql)
  conn.close

erb :showfullmovie, locals: {res: res, id: full_movie}
    
end
 
  


get '/dbfullmovie' do

  erb :DBfullmovie
end

post '/insert' do
  
  title = params['title']
  year = params['year']
  image = params['image']
  imdbid = params['imdbID']

  conn = PG.connect(dbname: 'omdbmovies')
  sql = "insert into movies (title, year, image_url, imdbid) values ('#{title}', '#{year}', '#{image}', '#{imdbid}');"
  conn.exec(sql)
  conn.close
  redirect '/'
end




