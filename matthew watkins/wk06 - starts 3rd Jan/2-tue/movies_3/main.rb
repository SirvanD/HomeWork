require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pg'

get '/' do
    erb :index
end

get '/about' do 
    erb :about
end

get '/movie_detail' do
  title = params["movie"]
  url = "http://omdbapi.com/?s=#{title}&apikey=2f6435d9"
  result = HTTParty.get(url)
    
    
    
    erb :movie_detail, locals: {
        result: result,
        url: result,
        title: result["Title"],
        plot: result["Plot"],
        poster: result["Poster"], 
        year: result["Year"]
    }
end

get "/movie_information" do 
  
  title = params["title"]


  conn = PG.connect(dbname: 'movies_app')
  sql = "select * from movies where name = '#{title}'"
  result = conn.exec(sql)
  
  if result.count == 0
    url = "http://omdbapi.com/?t=#{title}&apikey=2f6435d9"
    result = HTTParty.get(url)

    title = result["Title"]
    poster = result["Poster"]
    plot = result["Plot"]
    year = result["Year"]

     sql = "INSERT INTO movies (name, image_url, plot, year) VALUES ('#{title}', '#{poster}', '', #{year})"
     result = conn.exec(sql)
     
    else
      sql = "select * from movies where name = '#{title}'"
      result = conn.exec(sql)

      movie_info = result[0]
      title = movie_info["name"]
      poster = movie_info["image_url"]
      plot = movie_info["plot"]
      year = movie_info["year"]
      
    end
    
    conn.close
  

    # puts params
    # p result
    erb :movie_information, locals: {
        result: result,
        url: result,
        title: title,
        plot: plot,
        poster: poster, 
        year: year,

}
end
