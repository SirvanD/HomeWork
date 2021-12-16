require 'sinatra' 
require 'sinatra/reloader'


get '/' do
  number = 99
  erb(:index)
end


# get '/:number' do
   number = params['number'].to_i
   number = - 1
   
  
  erb(:bottles_left, locals: {
      
  })
# end



