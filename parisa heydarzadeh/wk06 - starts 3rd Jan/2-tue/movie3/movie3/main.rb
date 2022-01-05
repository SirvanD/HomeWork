require 'pg'    
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/' do
  erb :index
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


get '/movie_details' do



movie_title=params["title"]
sql = "SELECT * FROM movies WHERE title = '#{movie_title}';"


conn = PG.connect(dbname: 'movies3')
result2 = conn.exec(sql)
conn.close 

  
movie_array = []
  result2.each do |movie|
        movie_array << movie
   end
   


   if movie_array.length() == 0
    new_url = "https://www.omdbapi.com/?t=#{movie_title}&apikey=890ff11d"
    result = HTTParty.get(new_url)
   
    title = result["Title"]
    year = result["Year"]
    image = result["Poster"]
    plot = result["Plot"]
    title.gsub!("'","")
    plot.gsub!("'","")


    sql2 = "insert into movies(title,image_url,year, plot )values('#{title}','#{image}','#{year}','#{plot}');"

    conn2 = PG.connect(dbname: 'movies3')
    conn2.exec(sql2)
    conn2.close


  else 
    title = movie_array[0]["title"]
    year = movie_array[0]["year"]
    plot = movie_array[0]["plot"]
    image = movie_array[0]["image"]

  end

erb(:movie_details, locals: {
  movie_title: title,
  movie_year: year,
  movie_image: image,
  movie_plot: plot,
  
 
  
})    

end











