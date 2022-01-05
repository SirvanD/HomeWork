require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

get '/' do
    erb(:index, locals: { 
    intro: "You can find your favorite movie poster here!"  
  })

end

get '/movie' do
    ticker = params["ticker"]
    url = 'http://omdbapi.com/?t='+ ticker +'&apikey=2f6435d9'
    res = HTTParty.get(url)

    title = res["Title"]
    year = res["Year"]
    genre = res["Genre"]
    director = res["Director"]
    plot = res["Plot"]
    poster = res["Poster"]

    erb(:movie_details, locals: {
        title: title,
        year: year,
        genre: genre,
        director: director,
        plot: plot,
        poster: poster
    })

end

post '/save_moive' do
    erb(:movie_details, locals: {
        title: title,
        year: year,
        genre: genre,
        director: director,
        plot: plot,
        poster: poster
    })
    
    conn = PG.connect(dbname: 'movielab')
    sql = "INSERT INTO moive (Title, Year, Genre, Director,Plot,poster) values('#{params['title']}','#{params['year']}','#{params['genre']}','#{params['director']}','#{params['plot']}','#{params['poster']}');"

    conn.exec(sql)
    conn.close
 
end

get '/result' do
    ticker = params["ticker"]
    url = 'http://omdbapi.com/?s='+ ticker +'&apikey=2f6435d9'
    res = HTTParty.get(url)

    titles = []
    index = 0
    while index < res["Search"].length
       titles = titles.push(res["Search"][index]["Title"])
       index += 1
    end

    erb(:result, locals: {
        titles: titles,
    })

end


get '/about' do
    erb(:about)
end