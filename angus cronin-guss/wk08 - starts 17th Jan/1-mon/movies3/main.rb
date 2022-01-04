require 'sinatra/reloader'     
require 'sinatra'
require 'httparty'
require 'pg'

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
  
  

  erb :showfullmovie, locals: {res: res, id: full_movie}
 
end

post '/insert' do
  title = params['title']
  year = params['year']
  image = params['image']

  conn = PG.connect(dbname: 'omdbmovies')
  sql = "insert into omdbmovies (title, year, image_url) values (#{title}, #{year}, #{image});"
  conn.exec(sql)
  conn.close
  redirect '/'
end




