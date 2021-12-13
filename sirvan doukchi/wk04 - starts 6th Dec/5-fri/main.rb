require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 
require 'stock_quote'
StockQuote::Stock.new(api_key: "pk_5297b0e5a91b4f75afc2b8a65438b6f8")

get '/' do 

    erb(:index)

end

get '/about' do

    erb(:about)

end

get '/movie_details' do
    
    movie_input = params["movie_input"]
    url = "https://www.omdbapi.com/?t=#{movie_input}&apikey=6139fe0d"
    result = HTTParty.get(url)
    title = result["Title"]
    year = result["Year"]
    plot = result["Plot"]
    poster = result["Poster"]
    
    erb(:movie_details, locals: {
        movie_title: title,
        movie_year: year,
        movie_plot: plot,
        movie_poster: poster
    })

    

end


get '/stock'  do
    
    
    ticker = params["ticker"].to_s
    stock = StockQuote::Stock.quote(ticker)

    company_name = stock.company_name
    price = stock.latest_price
    "Stock of #{company_name} is last sold at US $ #{price}"

    # erb(:stock_details, locals: {
    #     company_name: company_name,
    #     price: price
    # })

end

get '/popular_stocks' do
    tickers = [
        ['msft', 'Microsoft'],
        ['tsla', 'Tesla'],
        ['aapl', 'Apple'],
        ['googl', 'Alphabet Inc'],
        ['nflx', 'Netflix Inc']
    ]

    erb(:popular_stocks, locals: {
        tickers: tickers
    })



    # html = ""
    # tickers.each do |ticker|
    #     html += "<p> <a href =''>#{ticker} </a> </p>"
    # end

    # return html

    
    
    # "Hello are the popular stocks"
  end
