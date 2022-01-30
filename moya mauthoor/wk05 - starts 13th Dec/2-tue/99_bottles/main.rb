     
require "sinatra"
require "sinatra/reloader"

get "/" do
  erb(:index, locals: {
    number: 99
  })
end

# Refactored to have separate get routes for 0 and 1
get "/0" do
  erb(:no_bottles)
end

get "/1" do
  erb(:bottles, locals: {
      number: 1,
      bottle_or_bottles: "bottle"
    })
end

get "/:number" do
  number = params["number"].to_i
  # Original if/else statement
  # if number.to_i == 0
  #   erb(:no_bottles)
  # elsif number.to_i == 1
  #   erb(:bottles, locals: {
  #     number: number,
  #     bottle_or_bottles: "bottle"
  #   })
  # else
    erb(:bottles, locals: {
      number: number,
      bottle_or_bottles: "bottles"
    })
  # end
end


