require 'httparty'
require 'sinatra'
require 'sinatra/reloader' # reloads code automatically 


get '/' do 

    erb :index 

end


get '/results' do 

    input = params['search_title']
    url = "http://www.omdbapi.com/?s=#{input}&apikey=2f6435d9"
    list = HTTParty.get(url)

    erb :results, locals: {
        title: list["Search"]
    }
    
end


get '/movie_details' do
    input = params['t']
    url = "http://www.omdbapi.com/?apikey=2f6435d9&t=#{input}"
    res = HTTParty.get(url)

    erb :movie_details, locals: {
        title: res["Title"], 
        year: res["Year"],
        poster: res["Poster"],  
        plot: res["Plot"]
    }
end