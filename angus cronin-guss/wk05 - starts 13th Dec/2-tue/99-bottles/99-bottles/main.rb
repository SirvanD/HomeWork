require 'sinatra' 
require 'sinatra/reloader'



get '/' do 
  number = 99
  erb :index, locals: {number: number}

end




get "/:number" do
  number = params['number'].to_i 
  if number == 1
    redirect '/1'
  elsif number == 0
    redirect '/0'
  end

  
  erb :bottles_left, locals: {number: number}
end

get '/1' do
  number = params['number'].to_i

  erb :oneleft, locals: {number: number}

end

get '/0' do
  number = params['number'].to_i

  erb :noneleft, locals: {number: number}

end



