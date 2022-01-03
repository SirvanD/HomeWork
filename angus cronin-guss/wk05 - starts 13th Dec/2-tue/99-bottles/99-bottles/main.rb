require 'sinatra' 
require 'sinatra/reloader'



get '/' do 
  bottles = 100
  erb :index, locals: {bottles: bottles}

end




get "/:number" do
  bottles = 100
  while bottles > 1
   bottles = bottles - 1
  end
  erb :bottles_left, locals: {bottles: bottles}
end







