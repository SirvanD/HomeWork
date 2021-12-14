     
require "sinatra"
require "sinatra/reloader"

get "/" do
  erb(:index, locals: {
    number: 99
  })
end

get "/:number" do
  number = params["number"]
  if number.to_i == 0
    erb(:no_bottles)
  elsif number.to_i == 1
    erb(:bottles, locals: {
      number: number,
      bottle_or_bottles: "bottle"
    })
  else
    erb(:bottles, locals: {
      number: number,
      bottle_or_bottles: "bottles"
    })
  end
end


