require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
API_KEY = ENV['OMDB_API_KEY']

get "/" do
    erb(:index, {:layout =>:layout}) 
end

get "/search" do
    url = "http://omdbapi.com/?s=#{params["title"]}&apikey=#{API_KEY}"
    results = HTTParty.get(url)
    search = results["Search"]
    if search[1] != nil
        erb(:search, locals: {
        search: search,
        })
    else
        redirect "/movie_details?title=#{params["title"]}"
        # url = "http://omdbapi.com/?s=#{params["title"]}&apikey=#{API_KEY}"
        # results = HTTParty.get(url)
        # title = results["Title"]
        # year = results["Year"]
        # poster = results["Poster"]
        # plot = results["Plot"]

        # erb(:movie_details, locals: {
        #     title: title,
        #     release_year: year,
        #     poster: poster,
        #     plot: plot
        # })
    end
end

get "/movie_details" do
    movie_title = params['title']
    conn = PG.connect(dbname:'OMDB')
    sql = "SELECT * FROM movies WHERE title = '#{movie_title}';"
    result = conn.exec(sql)
    conn.close
    if result.to_a != []
        movie = result[0]
        title = movie['title']
        year = movie['year']
        poster = movie['poster']
        plot = movie['plot']
    else
        url = "http://omdbapi.com/?t=#{params["title"]}&apikey=#{API_KEY}"
            results = HTTParty.get(url)
            title = results["Title"]
            year = results["Year"]
            poster = results["Poster"]
            plot = results["Plot"]

        sql = "INSERT INTO movies (title, year, poster, plot) VALUES ('#{ title }', '#{ year }', '#{ poster }', '#{ plot }');"
        conn = PG.connect(dbname:'OMDB')
        conn.exec(sql)
        conn.close
    end
        erb(:movie_details, locals: {
            title: title,
            release_year: year,
            poster: poster,
            plot: plot
        })
end

get "/about" do
    erb(:about)
end