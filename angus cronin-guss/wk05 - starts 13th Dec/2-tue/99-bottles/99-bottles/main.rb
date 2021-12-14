require 'sinatra' 
require 'sinatra/reloader'


gets '/' do 
  erb :index
end
def bottles_of_Beer
  gets '/98' do
  number == 99
  while number > 1
    gets "/#{number}" do
      number = number - 1
      if number == 0
        p "No Bottles of beer on the wall"
        end
      end
    end
    erb :index
  end
end
bottles_of_Beer







