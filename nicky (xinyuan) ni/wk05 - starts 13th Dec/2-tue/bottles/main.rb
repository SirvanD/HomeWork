require 'sinatra'
require 'sinatra/reloader'

get '/' do
    num =99
    erb(:start, locals: {
        num: num
    })
end

get '/:num' do
    
    num = params["num"]
    if num.to_i >= 1
        erb(:index, locals: {
            num: num
        })
    else 
        erb(:end)
    end

end