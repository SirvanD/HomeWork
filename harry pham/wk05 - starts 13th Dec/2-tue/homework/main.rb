require "sinatra"
require "sinatra/reloader"

get "/bottle/:num" do
    number = params["num"]
    
    erb :index, locals: {
        number: number
    }
end