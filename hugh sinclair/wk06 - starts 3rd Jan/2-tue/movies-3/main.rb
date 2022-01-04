require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'

get '/' do
    
    erb :index
end

get '/movie' do
    title = params["title"]

    conn = PG.connect(dbname: 'goodmoviehunting')
    sql = "SELECT * FROM movies WHERE title = '#{title}';"
    local_result = conn.exec(sql)
    conn.close
    if local_result.count > 0
        title = local_result[0]['title']
        year = local_result[0]['year']
        plot = local_result[0]['plot']
        image_url = local_result[0]['image_url']
        puts "from local"

    else
        url = "http://omdbapi.com/?t=#{title}&apikey=c4c2784c"
        online_result = HTTParty.get(url)
        title = online_result["Title"]
        year = online_result["Year"]
        image_url = online_result["Poster"]
        plot = online_result["Plot"]

        conn = PG.connect(dbname: 'goodmoviehunting')
        # sql = "INSERT INTO movies (title, year, plot, image_url) VALUES ('#{title}','#{year}','#{plot}','#{image_url}');"
        conn.exec_params("INSERT INTO movies (title, year, plot, image_url) VALUES ($1,$2,$3,$4);", [title, year, plot, image_url]) #exec_params cleans up the variables for anything that will mess with the SQL
        conn.close

        puts "from online"
        
    end


    erb :movie_details, locals:{
        title: title,
        year: year,
        poster: image_url,
        plot: plot 
    }

end




get '/about' do
    
    erb :about
end





get '/search_results' do
    titles = params["titles"]
    url = "http://omdbapi.com/?s=#{titles}&apikey=c4c2784c"
    response = HTTParty.get(url)

    results = response["Search"]
        

    erb :search_results, locals: {
        results: results
    }
end



