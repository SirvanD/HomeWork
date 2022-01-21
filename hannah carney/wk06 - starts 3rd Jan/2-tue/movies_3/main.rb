require 'httparty'
require 'sinatra'
require 'sinatra/reloader' # reloads code automatically 
require 'pg'



get '/' do 

    erb :index 

end


get '/movies/results' do 

    input = params['search_title']
    url = "http://www.omdbapi.com/?s=#{input}&apikey=2f6435d9"
    res = HTTParty.get(url)

    erb :results, locals: {
        movie: res["Search"]
    }
    
end




get '/movies/details' do
    input_title = params['t']
    conn = PG.connect(dbname: 'movies')
    sql = "select * from movies where name = '#{input_title}';"
    result = conn.exec(sql)
    conn.close
    
    if result.count > 0 
        title = result[0]['name']
        plot = result[0]['plot']
        poster = result[0]['poster']
        year = result[0]['year']
        puts 'from local'
    else
        url = "http://www.omdbapi.com/?t=#{input_title}&apikey=2f6435d9"
        res = HTTParty.get(url)
        
        title = res["Title"]
        plot = res["Plot"]
        poster = res["Poster"]
        year = res["Year"]

        add_to_db = "insert into movies (name, plot, poster, year) values ('#{title}', '#{plot}', '#{poster}', '#{year}');"

        conn = PG.connect(dbname: 'movies')
        conn.exec(add_to_db)
        conn.close
        
        puts 'from omdb'
    end

    erb :movie_details, locals: {
        title: title,
        plot: plot,
        poster: poster,
        year: year
    }
end    
