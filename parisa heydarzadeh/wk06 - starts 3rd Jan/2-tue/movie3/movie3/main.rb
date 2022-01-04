require 'pg'    
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'


get '/' do
  erb :index
end

get '/movie_details'do

movie_title=params["title"]
url = "http://www.omdbapi.com/?t=#{movie_title}&apikey=890ff11d"
res = HTTParty.get(url)
title = res["Title"]
year = res["Year"]
poster = res["Poster"]
puts res 

erb(:movie_details, locals: {
  movie_title: res["Title"],
  movie_year: res["Year"],
  movie_image: res["Poster"]
})
end

post '/store_data' do
  sql ="insert into movies(name, image_url, year) values (
    '#{ movie_title }',
    '#{ movie_image }', 
    '#{ movie_year };" 
    
    conn = PG.connect(dbname: 'movies3')
    conn.exec(sql)
    conn.close

    redirect "/"
end



get '/movies/:title' do
  movie_title = params['title']
  conn = PG.connect(dbname: 'movies3')
  sql = "SELECT * FROM movies where id = #{movie_title}"
  result = conn.exec(sql)
  movie = result[0]
  conn.close
  
  erb(:movie_details, locals: { movie: movie })
  
end






get '/movie_list' do


  movie_search = params["movie_search"]
  url = "https://www.omdbapi.com/?s=#{movie_search}&apikey=890ff11d"
  res = HTTParty.get(url)
  title = res["Title"],
  movie_search = res["Search"],
  search = movie_search
 

  erb(:movie_list, locals: {
      movie_title: title,
      movie_list: movie_search,
      
      
  })
end

