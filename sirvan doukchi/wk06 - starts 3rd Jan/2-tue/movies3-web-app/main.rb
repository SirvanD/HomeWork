require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 
require 'pg'
# require 'pry'

get '/' do 

    erb(:index)

end

get '/movie_list' do


    movie_search = params["movie_search"]
    url = "https://www.omdbapi.com/?s=#{movie_search}&apikey=6139fe0d"
    result = HTTParty.get(url)
    title = result["Title"],
    movie_search = result["Search"],
    search = movie_search[0]

    erb(:movie_list, locals: {
        movie_list: movie_search,
        movie_title: title,
        search: search,
        title: title   
    })
end



get '/movie_details' do
  # sql3 = "INSERT INTO shows(show_title,show_year,show_plot,show_poster_url,movie_name)values('test','2025','test','test','test');"
  # conn3 = PG.connect(dbname: 'movies')
  # conn3.exec(sql3)
  # conn3.close


  test = "";
  movie_input = params["movie_input"]
  sql = "SELECT * FROM shows WHERE movie_name = '#{movie_input}';"

    conn = PG.connect(dbname: 'movies')
    result2 = conn.exec(sql)
    conn.close 
    
    # binding.pry
    
   show_array = []
    result2.each do |show|
        show_array << show
   end
   
   
    if show_array.length() == 0
      test = "Data is fetched from OMDB API";
      url2 = "https://www.omdbapi.com/?t=#{movie_input}&apikey=6139fe0d"
      result = HTTParty.get(url2)
      # test = result2;
      title = result["Title"]
      year = result["Year"]
      plot = result["Plot"]
      poster = result["Poster"]

      sql2 = "INSERT INTO shows(show_title,show_year,show_plot,show_poster_url,movie_name)values('#{title}','#{year}','#{plot}','#{poster}','#{movie_input}');"
      conn2 = PG.connect(dbname: 'movies')
      conn2.exec(sql2)
      conn2.close

    else 
      test = "Data is fetched from Local Database";
      title = show_array[0]["show_title"]
      year = show_array[0]["show_year"]
      plot = show_array[0]["show_plot"]
      poster = show_array[0]["show_poster_url"]

    end
    
    erb(:movie_details, locals: {
        movie_title: title,
        movie_year: year,
        movie_plot: plot,
        movie_poster: poster,
        show_test: test
        
    })    

end




