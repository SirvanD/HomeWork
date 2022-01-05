require 'sinatra'
require 'sinatra/reloader'

require 'httparty'
require 'pg'

get '/' do 
    erb(:index, { :layout => :layout })
end

get '/movies/:movie' do 
    movie = params["movie"]
    sql = "select * from movies where title='#{movie}';"

    conn = PG.connect(dbname: 'moviedb')
    result = conn.exec(sql)
    conn.close 

    if result.count>0 
        title = result[0]['title']
        year = result[0]['year']
        poster = result[0]['poster']

        erb(:movie_details, locals: {
        title:title,
        year:year,
        poster:poster
    }) 
    elsif 

        url = "https://omdbapi.com/?t=#{movie}&apikey=2f6435d9"
        res = HTTParty.get(url)
        
        title = res["Title"]
        year = res ["Year"]
        poster = res ["Poster"]

        sql="insert into movies(title,year,poster) values('#{title}',#{year},'#{poster}');"

        conn = PG.connect(dbname: 'moviedb')
        conn.exec(sql)
        conn.close

    
        erb(:movie_details, locals: {
            title:title,
            year:year,
            poster:poster
        })
    end
end

get '/movies' do 
    movie = params["movie"]
    url = "https://omdbapi.com/?s=#{movie}&apikey=2f6435d9"
    res = HTTParty.get(url)
    
     movie_array = res["Search"]
   
    erb(:movie_list, locals: {
movie_array:movie_array
    })
end

get '/about' do 
    erb(:about)
end