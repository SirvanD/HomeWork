require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'


get '/' do
    erb(:index, { :layout => :layout })
end


get '/about' do
    erb(:about)
end

get '/movies' do
    title = params['title']
    result = HTTParty.get("http://omdbapi.com/?s=#{title}&apikey=2f6435d9")

    movie_titles = result

    erb(:movies, locals: {
        movie_titles: movie_titles
    })
end

get '/movie_details' do
    
    title = params['title']

    conn = PG.connect(dbname: 'movies_app')

    sql = "select title from movies where title = '#{title}';"

    query_result = conn.exec(sql)

    # binding.pry

    # if query_result.num_tuples.zero?
    if query_result.count > 0 && query_result[0]["title"] == title

        sql = "select title, year, poster, plot from movies where title = '#{title}';"

        query_result = conn.exec(sql)
        
        # p query_result

        title = query_result[0]["title"]
        year = query_result[0]["year"]
        poster = query_result[0]["poster"]
        # plot = query_result[0]["plot"]

    else
        result = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=2f6435d9")

        title = result["Title"]
        year = result["Year"]
        poster = result["Poster"]
        # plot = result['Plot']

        sql = "insert into movies (title, year, poster)
            select '#{title}', #{year}, '#{poster}'
            where not exists
                (
                    select 1 
                    from movies 
                    where title = '#{title}' 
                    and year = #{year}
                );"

        query_result = conn.exec(sql)
    end

    conn.close

    erb(:movie_details, locals: {
        title: title,
        year: year,
        poster: poster
        # plot: plot
    })
end





