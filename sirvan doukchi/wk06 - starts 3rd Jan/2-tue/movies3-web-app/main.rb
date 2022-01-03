require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 
require 'pg'


get '/' do 

    erb(:index)

end

get '/about' do

    erb(:about)

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
  
  

  movie_input = params["movie_input"]
  url = "https://www.omdbapi.com/?t=#{movie_input}&apikey=6139fe0d"
  result = HTTParty.get(url)
  title = result["Title"]
  year = result["Year"]
  plot = result["Plot"]
  poster = result["Poster"]


  sql = "SELECT show_title from shows ;"

    conn = PG.connect(dbname: 'movies')
    result = conn.exec(sql)
    shows = result
    show_array = []
    shows.each do |show|
        show_array << show
    end
    conn.close 

    # show_array.include?(title) do 

    #    title = show_array[title]
      

    # end

  


    

    sql = "INSERT INTO shows (show_title,show_year,show_plot,show_poster_url)values('#{title}','#{year}','#{plot}','#{poster}');"

    conn = PG.connect(dbname: 'movies')
    conn.exec(sql)
    conn.close
    
    erb(:movie_details, locals: {
        movie_title: title,
        movie_year: year,
        movie_plot: plot,
        movie_poster: poster,
        test2: "HA HA HA",
        show_test: show_array
    })

    

end




